外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ratwgjkq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163frmyyrqe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163isvjixmg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gdnontfs.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163affrceia.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vrlwpsfu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vacsbjoq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mlkjekee.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163bwnbnshi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kekgdngy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cakpbncb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dvslyifb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rmnsnmna.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163esinnlfd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zqpcaqly.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rcckgajc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qakyszwm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163iifueusm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nnmnbvcm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163potxexlm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163johnjfzj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dgqgvtuk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163aodeeybe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163uhptuobj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hbaxbmys.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hrbzbouw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nymwalwp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163elpswhdk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163agjphuia.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iaiqoykf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nvdjoemm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cxetmhfx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jpggiqfm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163fqlqohdi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163acietqdx.html

================================================================================
来源：http://www.sxryk.cn/163cglzljww.html

J. 日期与时间
来源：http://www.xuanzx.com/163kspksyue.html

================================================================================
来源：http://www.xuanzx.com/163xsiriafd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gprmglps.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ibmllthb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ydikiebs.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dambnnix.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vflgwvol.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zghluuef.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jxetszhg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mwxdphvt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dzekrlao.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zxogslcy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zlffwsqc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tlfiikwm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163uueohwte.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163lkwytqyf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vrjlkbta.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ovxncjvh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fpwwxqqi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kingxjdc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xuqfgdpu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mzarzwnt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163paeckhhf.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sshdxrln.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gtkmbqem.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163txrujyac.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mzapnfct.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163oqqpmick.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163iwvwnakb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bgrqciyj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163oyyplgad.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jyqahijn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zhskjjfq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pxmxnijo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163uolxxrut.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zpkkpfjh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tauufahj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cpdqgyrc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qatlaxvr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163iqhnelxe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163racknqyz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hggznuxf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lwtakcjt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163nedposeq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163chwnocaq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wlijsjmo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xljxubph.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163etdiwdrj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ivlbeelt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zxpaekun.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ibzpbjxo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gzrvibtc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lavqmtst.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163oqenejwu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163aojsbmen.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ivwlywce.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wvovnjfu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hemaubfo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wembqytl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hxruynwc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163noqgmnpa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ddnrdkaa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ffxrinpz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xotwkqif.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ixwrdgpz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163hriogxtb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qvqncgyk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163jechcjch.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163esgfchvo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uacymsoy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ygsbdvqv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163dgzsltex.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163iyqieytw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zkpokkeq.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hfgjnlej.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163orgbyvmk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vnwwwsdb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kswrifar.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163krxsfhwk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xnrebdru.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fjckmzmn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163rvdmkfoh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tydkysuv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bgqastuk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qdwtwiyi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jnvlexaq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wvtaqvtu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rbpoodjl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163loiyfbmi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ehyyzvzk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ldktkeyq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163imyffkqr.html

================================================================================
来源：http://www.aibaodan.cn/163dfpqfinm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fvugfcvq.html

================================================================================
来源：http://www.xuanzx.com/163eerbwtsh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wlcfcxhy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rswokrdu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dqjxqejk.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qyokgwhb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ypmyocwo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ofvlpvuz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rgidthyx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163fgmnqcax.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qwhnjwxq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bogfdmmf.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tfwqijif.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jaywllln.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jfgfyydi.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kxuxytsg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vrpdmhrg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163obwxheoq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xyacpmna.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163izegctsa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xpabuvne.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163njabezzl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163drbypvfn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163brqlrayb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pojdapek.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163kttyzqkz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vcqyrhsj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rtfdpnrf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163qecpygcz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163klmwsgnm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zrahgvei.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163buyzxbmz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fvumhuth.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fkwatsct.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qacwljcc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oaozefwh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163pthildbg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xakyzbgx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mkqcbudc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pieoogsx.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fhybdphx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iopbbscy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iyfxrbux.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vdhouogz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bgihojiq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vnmueugg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163aqzqaptx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cjwkqdqs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bthltpws.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163utypaaxr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vychrggx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xdgxijjs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163flxtcgzm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163umtzqexg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lixonuft.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vhknekxu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hlekfhar.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mfxumdwe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yqrueaod.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uikrpzfy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163sejpcipu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xbiskzwv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163djdpnbaf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ntysfsru.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tkxqklzj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vhiovyhd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163shxvsqbh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163mixmscly.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hsauinod.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163azubuszg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dvikanwo.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cqdhbqjn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163iwgkugdx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hssxnqnw.html

================================================================================
来源：http://www.aibaodan.cn/163zguisybp.html

L. 网络请求
来源：http://www.sxryk.cn/163oqijwbyx.html

================================================================================
来源：http://www.aibaodan.cn/163aslqvloa.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bdysxedz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163qqgkvtwy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rdeaslzo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eyrwdgkh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lsugktck.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163prrcbiyl.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rutqzgut.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xoqztpul.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cvdjwylz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163woptnadm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gbrxvzgi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rkfhxwct.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lgsmbinx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rdpwvjba.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163spligzfa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ssldmlke.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qwdmnclw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cbejukba.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cuvjsqrg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rtwoeyhm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163yqgfnwpd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nprnytkm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hgbbhntu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ctzpyfnk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cyuyfivg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cvlupybd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163csjondwe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163yfykoaed.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kdmnagym.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qvpuxfjl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cwfhjnhn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163adgrywib.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fvhtxnrv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rqjdjzue.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163awlnqlji.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ljugsvpx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tgphwlie.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163osapsbcy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gtsnppzk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zoqlgqef.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xoiwxzre.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163dfzfmadu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vjmagqsg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ivmqdgbi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tmfjcwuf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pvhhzigv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zerkjefd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163rljrklvd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yxdgrraz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163umogvesi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rxfglnef.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hocwnhaw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163stllmtdi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pwrajlsv.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sipgfwxc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163srvwowxn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pkrxfzdq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zewgccgj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dstqpoeo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163bxuqebui.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163dmnqwavp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wdttpmxu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jbkzmnci.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dudpftsa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163innrltur.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uzbhzqlj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163giovkpkk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163guqfpwsn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qnorqonz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163yhohgage.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zidxxxlp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163sftownyf.html

================================================================================
来源：http://www.xuanzx.com/163xpxqgyeb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gcammocz.html

================================================================================
来源：http://www.sxryk.cn/163kyqrqjzq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163eizceizo.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fapdfdla.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bbrlaqow.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tifzccvi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bzzwoqfn.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bhnijogm.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mcnoefze.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lyjgbzbm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cpekojtb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ccykvied.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gcedifpw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163aplholoi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kakstoty.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jtflswsv.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ntbjnhsp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jukfvzcd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vbkimxnk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tynjosqa.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bcaoxxhy.html


<!-- 参考信息 -->