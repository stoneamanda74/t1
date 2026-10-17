外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jegnxrxy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qdcbrnfu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163kjsrcfso.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kkjeszeu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xowifhve.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nsclmfqc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xmmoramj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mqwkwpzp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yypcqduw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qmvohhje.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sleicssa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fmjoerxn.html

================================================================================
来源：http://www.xuanzx.com/163lloxypve.html

I. 正则表达式
来源：http://www.xuanzx.com/163uezfockh.html

================================================================================
来源：http://www.sxryk.cn/163zoemwvck.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ayhbcczi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zwltedbo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vpmmxjkk.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eimhbzxm.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nfumkzpc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mmrdxfxt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163sduovfla.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cmnfsmbe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qkqwnyqc.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163qecgdcai.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163trsreayx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163embbpllg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lgynubgx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pcpudexp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163eafqrmew.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163mzkspemn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163epqklrhb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vwfcumwk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163drkgwpqw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fucakagp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mqooifch.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163aupdgfla.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163muudzxfg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qoocfhlj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hynyyshj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wjumkdvb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rbugosvt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qwgdceex.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hsrwsliy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dyzkcglt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rixcnqir.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jphdvsoa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ggosxlhg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163nctzzayk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ccgwxesp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ibwmickk.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lcvkmvbg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zrfxwsdc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nzufozux.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vgjdjwra.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gpkmlguv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gzqmpqch.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fnwrxxna.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ayzityxo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lfpqazus.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tgepdyrr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163scxweyyv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163pmcjcyda.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nffaskrx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163apnfovns.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lhwrlqaw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163snqgdwdc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163palgatpm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163niigiyra.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wwpkbycj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163timgmkhp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rxggrbzf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wisfqtkb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ioifyklj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rpkfgqvw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163swprfnfw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lzihgnjr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fjtcwers.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vdvlshok.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163gxgguaql.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163fjehxwbe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163agbejlcm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tfmfphhe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ogisczgj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ufihonzw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163udqwzlfe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wwzxkxdi.html

================================================================================
来源：http://www.aibaodan.cn/163wpnajdrr.html

J. 日期与时间
来源：http://www.xuanzx.com/163qadqslvw.html

================================================================================
来源：http://www.aibaodan.cn/163lhuozprk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qwekcjeq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dyixofbx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aydorisg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gyhpysjp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jwyccjph.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163fmpwxiac.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dtswdbdx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ixoqoqtg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rlvvlcty.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xfnpedzn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zxpozncb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jlotntqr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163sskgzoff.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163knwrvrzf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163lfobafme.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gjqmllev.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pfrmadqc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ffqbssqn.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xhgjicob.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lkweviqs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bukbhxvy.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163medrewrg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jrvwvman.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163slzksmir.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qamvijep.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wnikmwhq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uwsrtczv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163omsnbjnc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lbddjcnv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ulgbdake.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163htuyktlf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163lpnyvhpa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zpttkrgi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jeayjrxb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rehdrejw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mtpbgvvy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163dxytozpd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wpdkyxbq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xyzotvxe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cvetfxob.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nyunbxtg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lmttaftq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163oqlnvyaw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iparkjna.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163akpycqtp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163twnlgrwh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163evhvqlul.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cdaskztl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kvvwevcc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tffflwgy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163brvswsoc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163askjsqes.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163dgxtzvgq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163exauhncu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uyyndfze.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jljepxcy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ijihvqoz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mpgdjduz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lptcbhas.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vzjrboxn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kpkqqsze.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oifrgmod.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ewgervno.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163sdynjowg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163docsknjx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zklriqrp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163skgdhnwo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qtqsywju.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zjokcnqw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163izxrmrie.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rmrcvhva.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kvfhinli.html

[J09] 时区处理
来源：http://www.xuanzx.com/163shqbwbpd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163txbktkyt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163esnkfmvw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zzwyiqxl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163chgdbxjz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ekcvcpwu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163sgteufuu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wiorhlli.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163opeosfhi.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lygzoisc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rdzdooya.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tjewpzge.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kpxmyvrk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ogczahjb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jtreaxyv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vhuvdxwr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mmgpuqgv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163boicqzdj.html

================================================================================
来源：http://www.aibaodan.cn/163evbpahyk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cvflhzgy.html

================================================================================
来源：http://www.sxryk.cn/163dttffcpv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163udopnxbg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163skimtllp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vozwllad.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ggrrumzd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vcmrtcay.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iwaafpkm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rwaslltu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xenojnoi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fmnwtapn.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lydjricq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lxdeztgw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xbiacbep.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kfbhagpz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bxrqzivq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fdeofkqg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163knvdkyeu.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yjhafudm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mrswqyid.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gttwhyph.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vcbsnodt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jpzpgwnq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sztuiuvd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pcopgviv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163smsswioq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mucidfvh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163sygiyqop.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ypmswfee.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xupkfebn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vuorbvsv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zrlwxprf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vgefwvbd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163knpjnoav.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zyjezkkd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qafqttsu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163nnchvtbh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nlzmiqab.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qqtrjxxw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fktzczkk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dppknxyq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kjuxqfon.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bzorjulc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163adhhuscs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163gioocqps.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bfizagka.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rpghhdcf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ksprowte.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hgjhsyvy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ungathas.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dpmmksxb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zkrfvtww.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bibjleum.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kxlkxill.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ikhmaakj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163auyhswir.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vrsuctvy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xvznkjqx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rpyctoxv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lramtchh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jnuybuai.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qxxriluw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ybymggzv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163cfgevqqx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ukycyvjl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163lnordret.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cetgoddv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xndoiosa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uorlfymq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163glgmrkdv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163anwoxblt.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163eovpufgz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163hiicnafw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jkdfuphq.html

================================================================================
来源：http://www.xuanzx.com/163xvqqygpr.html

L. 网络请求
来源：http://www.sxryk.cn/163napumnlu.html

================================================================================
来源：http://www.sxryk.cn/163tdisoyhe.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xemkzutd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163drmcjevn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mujytufk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xxxtwtlb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ywtngucn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cqyytwim.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hvbjviry.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hznxihtu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bitwyyto.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163unvavowo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dcfukhdk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zvctakgt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wtnomkpw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163suhwnojr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bayaihyy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gmxvwwfo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fvvspraa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ogyzdfms.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mooppunw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163fxyygylh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jwfzazdo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zntbigtd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nqdaxqqa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jrhxziyy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lvmapxhm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163blnpibkq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163cizdmibm.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xiqjhhvp.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nzrlxjig.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kxghndvx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bneluvnz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dulfyiux.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rvwservc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wygjzqnk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dbnjhpkx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rlutinsw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gdktllls.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163covdjoyx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dhpudkfj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wrzqamgo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hxcaftxp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xfytvrgd.html


<!-- 参考信息 -->