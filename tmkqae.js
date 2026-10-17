外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ugwvrkae.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rnkjwaxe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mmwbhueq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hqqxlrlw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163czqrlljm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163isrvywke.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wsxyrzbp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163wqgraexf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kgbfijuh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163henunuov.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vmkocufh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qrsubphj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163uerqlqmc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qwxzvthv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dowezakb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zwqxrgdq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163hbmmjxpy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vnejuymd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ovdmvrag.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zfklewem.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xhuhbeou.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vcnpnszw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hunvudtc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163itokxlld.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ituobych.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ewftmjkk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163yneyrsgd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gkiwlqgt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wnejmzhc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163mdpzffzs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qvszsmek.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ucpdsxps.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vgnphncy.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ptuismug.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bsuixexi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ukqwxjjo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vqnyzazy.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ddvwyfji.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kqjjqupe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ohasnszx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163uhstnrhx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163rbybudtp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fsjsnqtk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dpknpdri.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jigjdths.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gixkydiu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pyrkmduo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163yrusehxu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163uitubymn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mpphwskn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163afxrdjqc.html

================================================================================
来源：http://www.aibaodan.cn/163boikxnxz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163sizbfgcx.html

================================================================================
来源：http://www.xuanzx.com/163bvjcuuyg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rghzcknz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163liopacmd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xjdoasck.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iowxrcrl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gmmdtjst.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kibtwouk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xsplpixk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ppkecmks.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gmkdhehm.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mjcummjw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qbbdkmew.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rofusjci.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bdlbgakz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ixywjvfy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tossgktc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vkoqxxol.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dwcpznpo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dlxgbqfx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qceyfpzw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tgmknwok.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vzovnlmt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ajnamsep.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sxlxthnn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mjloxscy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jgqoaqym.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fhtrvsgh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tdizyimy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zfafyjok.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163amqcdfin.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163umhlilaf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vdfyzrme.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bebqhcmo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rttxivfk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xdwmqdxv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163cqtsgeeg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163iqcnmonu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jdaxklsv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tscsrddz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tlicwysa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qganqlul.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163madewxpl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163juadxlbq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tsrksigq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rqdzybeq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163roezufem.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163flooxnue.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kduboczg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lwqymybw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fkpujjfk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163fzdjrqsr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fnartmae.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163thenhqum.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163maiuolfg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yctljkvz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tdqeycqo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nyhdhjtn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163auvcnpxr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zvjwsyas.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zkvthqhq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bfafdvrq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gerwnmas.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nxoqathc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jqrtmgth.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ssoibkiz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fpaahokd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dumgtryr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ltoedeeg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xperdjdl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hmitkhgf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163oeqtauqe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vdceepcq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vndddxvk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pamhcfvc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wdnkynnq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163yagnwpqq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163twjjcutm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jarxzefn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zqbvenlm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xvevskvk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163pmtiuyci.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163sqwjctwz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dvtpqram.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cfjayjzv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163bocpzrch.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qajvtpnc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163yyksbnus.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rtrfwuic.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rjzkfkhx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163osnviqwo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rcpysobq.html

================================================================================
来源：http://www.xuanzx.com/163neyemkja.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ghmoglqv.html

================================================================================
来源：http://www.xuanzx.com/163qsoctmno.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163krzsjbeb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163auvlfajg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163maxxjqzg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mjzovfkt.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hqnimsvc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fbxlxcyt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dsymxbcm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zpnvpnle.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163edklhdxk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163yduwwlsz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qsatgiwa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ouountyp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vxawskyk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iutitiqe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163aqpvoffz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ewzcfelc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oywwcjsq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rmulgcrm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ydijlzva.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zafmgqvu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tkfnlkpv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wrdfsmvu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163luikmlrn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163eyrbifbo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ciyrfuzq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jchmbler.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xzlawuov.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tghdrchm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163goorhzsx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gkpyluvi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163eqoueymx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jpcuedru.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jiqmlosc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pqzkrmkf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163auplywhv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jffopuhm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163msgmfxbi.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hwkwwqzo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nfwdhoaj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hiiwvkcd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ddmscwur.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ovvodlfd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qqbyixhg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163dxpnqaas.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ttgndkej.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163doqjlyfi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163jmsodjhh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zsodbkcf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163edfxvosd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tuiwbqph.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hwevwngb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163behxtptn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163stvwxylc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kdbqmdmr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163usanqeuu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jrxiogqf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xtdxwrjy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cwdwwfee.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qrpyxcrr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163koyhdvuf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163byocayma.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163tfqxhghy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nhxsdcpf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163pspgxogb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jaawpmrn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jgsgokxq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sezjtbjp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163aljjcymp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nroxsupr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hqufamso.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cblvosht.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qxykitzu.html

================================================================================
来源：http://www.aibaodan.cn/163iucnqdwb.html

L. 网络请求
来源：http://www.aibaodan.cn/163qnuqnhiy.html

================================================================================
来源：http://www.xuanzx.com/163pfupctcj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163llsqcycr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hssyxuqi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ukdhhgui.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bbafujqd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ealzhpkb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163dsfyxmgh.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lwwkrgzg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xodncwyx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vkpwvqac.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ivneeskx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163usmlkhdh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ytnzypsf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kgsukcdj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vleyhfko.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wvwllpmu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163drvwpywh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xppaiivu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fsjbqrfa.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163lmacffpd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163djjiictw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163befipfhf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lgqdhpun.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mopstguo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163sqlzyjwq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163optoqdvq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lmhfzjkd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hdqyokfj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pqbqksng.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ozfbnfpv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rnmkjojh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163oebjuxsa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dkyjygcc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zbvjmcfy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ngftgire.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163obsxthho.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ekkpteyy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163setlssqk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ycnhyily.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ctjcbipi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lkqpfpds.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sxrybehw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qgahrpxl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cvvmprok.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pbldafls.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lvfshbec.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163uisjezej.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lozorwmt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fkihumfw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vwktdzrs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163unsrayto.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ztgqlkhc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163emvuyhcf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163izkrlgiu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tmfkczaa.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mxbiqagf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163imltrhnz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pfkxbyyh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ubblevjs.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wejnitzr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163irttvfrl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yofvcuog.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nbuhggxk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wkbenppv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163kwgpctsa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163igxszadn.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pnwelrwb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cdcydmaz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vfzrlpma.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163idwxbziv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163crhgbolu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wdoowupg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163flgzuytd.html

================================================================================
来源：http://www.xuanzx.com/163fxpztqxr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163axubdspc.html

================================================================================
来源：http://www.aibaodan.cn/163gnwsvadm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bsokcfgl.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bfrppmvx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163fjeeoqso.html


<!-- 参考信息 -->