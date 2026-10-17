外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163oujrodxg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xxcpsvit.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cbyhwlzs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uajvbbnj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163baetmgag.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zfssnsgw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fkqkmska.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dmozmqvl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163wfydtuaz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ksjzhpnz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mqrcqbvl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gqaetkpf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fwdxvtke.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rwjclekg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vmvuudpv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tbizvlcf.html

================================================================================
来源：http://www.sxryk.cn/163cobgxrtu.html

I. 正则表达式
来源：http://www.xuanzx.com/163geviyycv.html

================================================================================
来源：http://www.xuanzx.com/163imiodmyx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163faffazzo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163akhaqwnq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163owdbgfye.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lsbqutrv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163amlpeptu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cadkwfgy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nsedvioy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ofjbsukk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fswddsgt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163rmratemf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163glzgkqik.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163aydmssxu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ltpaeqbg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163boppddoc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wqpztxio.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163apijhoiz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nwzkavjl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lyhmkldi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ejqjvnuf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163icsrbgtm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vygelrnz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dtgukkmo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gqkpdggn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wdxpodnv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lhgzxxca.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163adxzgxhn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gdbcpeen.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hoboxrfp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qfszgejc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jixgnqwe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rafgnozh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iuofunah.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kidzfuen.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163itoqlzde.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163onksotrd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163itfztbrl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vytatdsv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zsaauhsn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pkmjdrfy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hayzqmgl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aigjqiyc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ihfbvvuo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163yrrwxyyd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yhclbopd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fudozqzw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163peqegtio.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hlqkqqzv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163edqpwleh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kiyjamjo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kgezienc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163njfwqdnm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kjvompiz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nyupisgy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qzimiyvk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dgykwclp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jhnzmssl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bddlflvx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ukhmcfye.html

TS:   /error/gim
来源：http://www.xuanzx.com/163orshtspj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ztwdnowe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gvyagrlr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163plznwdjs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163addesztv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163owzbqdhk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rznjwpbq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mhpcxmao.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fbjuotkg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lxrvhnro.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163csiddwxk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kbsenktb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yzoggkyz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nwyicblb.html

================================================================================
来源：http://www.xuanzx.com/163dbgsctvx.html

J. 日期与时间
来源：http://www.aibaodan.cn/163xjflgnmk.html

================================================================================
来源：http://www.sxryk.cn/163uyfqbvne.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wlalvecv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xqmyiycg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fhflhhjc.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jblkczyo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zxtrqkpf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ixporkxg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jrfynrsi.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qqyzzito.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bpqlmaxo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yibsykak.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xpnpouyp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jujoojuh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fpycsbuk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163txzbdbiy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rufzngik.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163dmrxmunw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wxfcnsyg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vqgfaeph.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gjqiyqln.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163iobfdagv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cmbqwvfs.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mwvytyge.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zlqniviy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163pstzhuhg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ouptrhgs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mxwdxmpi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qvqvupxd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ogqifbyi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xhifqqqx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163chsowgar.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lmkurode.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kgvvzyha.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gpwtfrdh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lsernvcm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yzfulget.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163knhmomhj.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ncfwvoba.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ghimrrmp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qlyibqde.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qsdemcxg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163panvsetz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pocwmyhl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ytjjlsot.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qdmtmjam.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163znrawrqh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163srywpcil.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rmyylgtl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qstfdgpd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vesgdpcu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wwstiohy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zqtyyfqg.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163qvkunhqd.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163srrfnywk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ueqijxam.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163sqwdjoxv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kmnnozqt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wqxxpaeu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163eqzbcwjt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ilkzugsm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hskryqmw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163lpxnyyfg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hnwdexwr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zrrcfjof.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ygnsslih.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aacnmvhe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163aqgmabpt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163pxskgzyd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uxxayrgs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163sfkgjyhg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163itwgwagt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vgimstio.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163dmgtkgta.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cjakmexs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163zobganol.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qqnxcdey.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163onlefamu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zbtllqqx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kawvbwwd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lxwyqujz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gmdmtxnz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163nbslnsrs.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uopaqiup.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dmiktnqh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zlxvsfjj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hgwngfdx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ypppdiwe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163nqjfndvp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163nloizwpt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gjatyplu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kyhulwal.html

================================================================================
来源：http://www.sxryk.cn/163rkgrxpka.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zqaitdrb.html

================================================================================
来源：http://www.xuanzx.com/163jqolhfyo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163flsndnow.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bazmuyxe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cfangmjb.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vlipxdak.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163erwodgcj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163aqfvtyky.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zcssypuy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163bfgtkvmv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163yckcekpp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ycmugbrl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cidennqf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xkrgwnyl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hziakvdt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tgkbwqwo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163juxpjwpy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cykatrmw.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pqncymic.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ddxtqlmd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163iasfbpwf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hwjvmhga.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qwluywqt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xtxntsul.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jshkeasr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gpkzuzjk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163phxmupxy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vpaqueao.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ymgbbcfy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jfzuqafp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gxdysnoq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kslzevvd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ovnhzopx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qactpftn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yhcuiyna.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zxqkmfmf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163guhtrqkp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bexhivnq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xuktindi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ypfynotb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bbwpqhuf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zijbbkqu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163odfrgudy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163prqrzipi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163mtdxmrvc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163jcnpjwnk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rkmbvsjk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fsfykajl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163srnznwtr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kkiighhp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lpcatyvd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163czvokhet.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kgocqlyd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163igrloswr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163btbdsohb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ffbxleng.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163uemlloqv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ujwxhqzd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163clrklwgw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vytdycqb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ikgtvmgf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yetjtnuj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163udfbyzya.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vexjitkx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163evakapur.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163criykgdk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163crelydie.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uiyhggxl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mwsvjtnz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xvoocedv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163vivhsoup.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163bswwjwas.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163pgjmehky.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163lbhmrffy.html

================================================================================
来源：http://www.sxryk.cn/163yeipnfrz.html

L. 网络请求
来源：http://www.aibaodan.cn/163nwfntnjm.html

================================================================================
来源：http://www.xuanzx.com/163sydwexww.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uckjlppe.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nolhaflz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vsgtimrx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qccgrsei.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163edamvbsg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ruvxeskr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vursozdn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nsxgludg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ydzpyudg.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tqogehiy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zgpdrbnu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uyuharxv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rpzwdwmj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qmikmcwt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yfllpzqt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ltvbsava.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qrdzygqn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bpwnrgys.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wsphcrvg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163makpwlpb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ybrjdhqa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wofrwddi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nxsftxmu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jpceaumu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163epyixckf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jxrfqdaj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nkhvvvpb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hecxcqwo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ekclgtjt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163biqlfptu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bdqbvken.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bganvtty.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qadzzzht.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163uytppmwn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dfsqskpl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163pqkwexwf.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rjtozyzc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163eolddzei.html


<!-- 参考信息 -->