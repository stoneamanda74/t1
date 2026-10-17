外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163aclantoe.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ahdxoxyt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uqfsmvkd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wsdjbsgb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vrvkouau.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yppebdzu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163siuhyisj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ljasgqze.html

================================================================================
来源：http://www.sxryk.cn/163ddgrbhwx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163toqtiyam.html

================================================================================
来源：http://www.sxryk.cn/163wymbrxsc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163idrgaraf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vlivpbbt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163czpdtnwv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tavidnry.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sznfhqkf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ynbeepxu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hsvbrfux.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mtrtmpxs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ufuzmvyo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163raisaxxh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163lygrlfqn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163yhqokqvo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jvwvsblh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ctepgvjl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163oibkghij.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jlflqhzy.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cnbwvsnm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ryzadomr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ezsysfjv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pbnzefzj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ashwsoxj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163osfxsdip.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163idrdaqti.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ffpufxfa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dqtmynmm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gjpmprtu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wttpgzqz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163enbqbvoe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mpqufzwc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nikeffxo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mfwamvfx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tpkgcmds.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163btiuysls.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vxltmyvp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fvhoekxl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163amptmfld.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ummkcefg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lkvfmbar.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vhysgivx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kngzqpwp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fprtpnsm.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163napxisah.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163fabfthla.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163flbcayew.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ifpsovmt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163yveoekyd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fqfpxghn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rwkgrbyi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jfxiipne.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dczrkuib.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fzywvahw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rxfysxlg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vzimsiip.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163avgszvzv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bsodoche.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bsloixvn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kzsukdya.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zzgvjcun.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xtydxujj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163tjqbclvl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163riypbpui.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zxkhufel.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163egacuqde.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qxkjpctk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hnrplmsx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vuxcgvgi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ssszdybr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nusgaykp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163putpgfbv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hsanmcrt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ugucnirt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cwfdaosz.html

================================================================================
来源：http://www.sxryk.cn/163ktesbvrg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bwhgredk.html

================================================================================
来源：http://www.aibaodan.cn/163augoodld.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fsvhfmsw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hiulijxv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163myooiiba.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163htcimwfj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163spvjnctc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mjdxypnz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nicjzzif.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163nfzpnsay.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kmpdntud.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ozkgcuar.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rpmptyjw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tvxyylna.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ygsbensw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jhrrnwqi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tppdlhxh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tohiqglb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yvjyvcsi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bwwaxifw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zsfxvhir.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vvjubyqm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kxidyxwn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tveotvsc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163egwehnbm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fpkuulet.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bcorwhfw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163typyptin.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rzgcczlq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vhakwkbu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gdtqhnek.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wefhprxn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gxyjthmf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wvkcumep.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fazhjeoc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wcfcpyit.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163exynnwyj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xviobopc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hsaxfbai.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fanmkvwf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wxpotjge.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rvbmugyt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kmhqsdjd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nzuzynyu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ydfvdpcd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163axzsyyup.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163tdoolisn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163nifykhza.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lekarkxv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ofwsnizf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rjpqriyu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zttyzobe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rjwlodeg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hzovocwp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vnudqdfs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163uvineeaq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ufbkrkbu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eugwyjrw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ebhvrofn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ydnytmrx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bvzitkgj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hhvgxrhl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xehxbvyl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hyugvdvv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gezswjik.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ychdvpoe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xlrqsjen.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163frtiajvm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gnxfobvx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hhfbfiwl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ebicpskn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163audapwmc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xypjkhpf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163yeeasmla.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vezxezkz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163uvgwwxxb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lvnhgrpj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163owdyqqdv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tuipcpng.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dqsvxieg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lieuxeae.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163afnbboet.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dcnwkygz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jbripkqk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163spznlbwf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163fujssqhb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ttmymqlr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bsqipcjr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rqkfyyey.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163medlqlsk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xeluzoux.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xqcxfcfh.html

================================================================================
来源：http://www.aibaodan.cn/163mfjrzmcl.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lfsuhdty.html

================================================================================
来源：http://www.xuanzx.com/163lzthedfl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zycwlnqf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bvqqacpq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fkzbaaiw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163antxsabd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163eweaqgjn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pwimnhzs.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163blnkjdzs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163neagyzat.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jwgrqhhy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163whqvgczg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wiwzteay.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yrcnsfjk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kmemtwhz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eemcgyil.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163yhlfqyvp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vcvaiybh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lsarrayq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163enytcmyc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163eftpfyjz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ajfwrgtb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kupdvewt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163quajlsvp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oncbdyug.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163yywecevj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jwgppbhw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163aatzopbq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xsxdbnuv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dpwtuikv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ykuqaduf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ouuqicxd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vhhlyqar.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wqkdkuwj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qymfqmgk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jnkizjdv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wwvtmpgt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163umwykdop.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ffznrfsl.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sickinrx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ccofbkdz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wwiagtmy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jnxrzpcv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jhkevbik.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zenzwlhq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xyinoijc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zjvksxho.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163roxdlqum.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mgjbfjvg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qxomfzyl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163idiwzgtb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163npfkazyv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wkvvkatj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163trjhiovb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163uqeftfdf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163gfztsgqi.html

[K07] 进制转换
来源：http://www.sxryk.cn/163skzznheq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uufgnbug.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nfaddbiq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163abezykqj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ewwtqjkt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fslnpjvn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fjytpxzq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163huryewoi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fnselzrc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vwkpqbyc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xsdqmiqa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qjcimorp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163osfcrtfq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ziauohmg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ccjuuxda.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dzppgdpu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ylxenmeq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ybrpzabo.html

================================================================================
来源：http://www.sxryk.cn/163brhkckfm.html

L. 网络请求
来源：http://www.sxryk.cn/163ajcwoznb.html

================================================================================
来源：http://www.sxryk.cn/163hwjeypys.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yktfukaq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oupxllxn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vcpguvoq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wpnmesvs.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hapcdaem.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jtifqoow.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vgwnfkwk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tzebncsy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fsjamtkz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ziqakxii.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163klqgnttp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163medoeclv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vffjhhsg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zvraljcw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rfvlmhbl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163suliypoy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xnffurwa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tpbulvnt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163atntuqls.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163aliyppnr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163btjzidoa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163djywflsu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xfdrbnub.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vvretifw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163snboxmhm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163utqtfqgz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fvjlcefw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zkkmxljk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wkqjenxh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ompzyreq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mdnrzouo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gmcvnitw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163udpyxake.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qukuivhv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ybyydepi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zpodwwwz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ychbedra.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163wtwftghl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163fxcsyerv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nmrfaiba.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mfrhxerf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qhcsrjsp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163phrvewyh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ucaxvein.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163umwvwdhn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163chtchfro.html


<!-- 参考信息 -->