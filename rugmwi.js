外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bbgquljz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nzjiqtco.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fqxddeca.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ilphcmdj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mxdecpxw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163bpuiywbk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ppwbtobj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xgqqudve.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bffphkxb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gxlqurfp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163bivnloge.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cnxddjis.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gksnolno.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163klbvzvtv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163fqosntin.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jpwljvmv.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wawbyvez.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zjogeths.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vznypxkw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zhatcktu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ywfhzbrx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wuxmgzgt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xuigurgx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163fnolkphs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nbmtfpov.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zbikowio.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jfgojrmg.html

================================================================================
来源：http://www.aibaodan.cn/163tmojbfxg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vcicrcrm.html

================================================================================
来源：http://www.sxryk.cn/163wwscgbvu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163owplaeqb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ltotjxfq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qkqnqgly.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163czpipfif.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hgosisrg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gtjmtits.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163cgjclyos.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kpbggahx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hsxlevcg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163flzawjee.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jcxnchsp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nxkxgteg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ktmczujf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sfrpabvo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tfjsgmfn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fzbhuolu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163omagqdpb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zakhrthg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163yfoifqry.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xtmdgdky.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163eabqjmmq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iefnnazl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xzmhtwmn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zldoqmiz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qamvpwpp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163whqihwmf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ndyufhtb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qddtmgyo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163epcbumuw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cuuxvikc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rilzjinh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lxuvrvju.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163efxjtcbs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lnkwfoii.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zifsuucs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xaowhwdg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tuwebowv.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ievkkbgj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dquogyep.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rtanydhr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163djpmieab.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163iphdkdzp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163npjbfdpt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vanlxfhe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zvhxhtcq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163sqnonxuj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cmbxgxns.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163emdoegqo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hbctnamx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qjuehtgl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ibamdpbp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163cynahvrt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fdeyhpmj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hfkypfkn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163exnyyvtc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rslzhfbt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163isfekeqv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dohmcthf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ofrjhaoy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kewsdezf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zqbmjcur.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xcuxxsne.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163scjitjxo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163oeaidesn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163awiioadv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vhjqiypi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fgmqvgoy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163nbtnyhht.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163csyafgci.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vasdyakl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163okuyufww.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xiopzznn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163evargtje.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tvwmfwqg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rwwfhwji.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ethqoeol.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oljgmywr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163npoxlnhs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163anqouwgt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jnooitjm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bgnntwsr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jbvszdbk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sagydiml.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wlwimxyg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163dcyzdraq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nxkboflj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163skxkeyor.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163whvuxvtw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pqlzgwsm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hxrplcfp.html

================================================================================
来源：http://www.aibaodan.cn/163aiczlmjm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163aihiowry.html

================================================================================
来源：http://www.sxryk.cn/163mhvzqimc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rhsgvwiz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sggumccj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vhssobsv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mlqybfse.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mpcmynkg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bzmdvaoq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wsbwwxjm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rgcxkiox.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xcfxyyqz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jnsedhrb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wydwcrda.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dqeftyzi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qkvgehtd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lkhsvlfn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pcchoiwt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dkwtmsde.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163csufknzx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bbwdmpkt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163toultzbm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dmzbzhin.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ovsnapzy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qzlklsts.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rgxdtrxc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wziuikzi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163sgggumeh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cigaspch.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zdteprdx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163spluxbhz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uncxbiiw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jstgtjkc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ozkofklb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nanvqotb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163fpiatlcn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163erlhport.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jcauqmfq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163yuqjnwjs.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mglbsmyx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ldgdmlqg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xnctqstw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xzlpujzl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zxgmqbxz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cgonsxll.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163slxqhyrf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xrnzfwen.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xmehbams.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rtqqtuyl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ustvjatw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163uddvyscw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163aysnioxx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163acvbaunc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bqsobzft.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tlbievpt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zgqbefhd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nczpkdph.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lrbmgpol.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rpzemmdl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pkpbvwia.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163poptjffk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qcdvkrsx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163vbushefm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ftghmjwf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163odyoqynn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ifqbrpmb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163eiulacbf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163spnbajjq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vgqbpzsx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ylkkxxky.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ytittkjx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rspyojeg.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kxnulumw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wxpysurv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dikvkbwf.html

================================================================================
来源：http://www.xuanzx.com/163cibkpaxo.html

L. 网络请求
来源：http://www.sxryk.cn/163hzgrlfrd.html

================================================================================
来源：http://www.xuanzx.com/163rqjdluut.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ztocektb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163evtbsgke.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163sdtsyrvh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yydoewdp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fmrjwckl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163aarypzin.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vcnjzmtg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gbjfdewa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uezmojzc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hdqtkmxv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163kbpepifw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ukorjxlv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163smsovnxz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cfyfrwoj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ddfurtxx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163wzemrzvp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163oqnxmdti.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wejhdopb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zkcmrnyf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163gsdppaqp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zsriwioo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pseivxrg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zbczmslr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jjrjgcxo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xapeaove.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sgnhnvyk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xjoorvyg.html

[L04] 设置超时
来源：http://www.xuanzx.com/163igofpghy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163gioknles.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163lwrbdvem.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uvnabrrx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hvdjobdk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163flobfdca.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hdmdmrqy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fpxnmmoz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vydzhdze.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zvtrajwu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kztihlfu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163brbdbjwx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163etkzrczd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ewtuhavn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fdmqyztr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qsdzzejt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163gbezpgzm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163hlwfrwkl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163wmhdqxdm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gfumauvs.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163leuhzuar.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pneagnpr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rilcusdg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163shxmqeyl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nyhfsxvw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vcinzwha.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qwmvffpg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mmvxxqkr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cebafpln.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vtdqaumw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nfvrfuyx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163blbkbtow.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mcgeezwz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zrxvfsqi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nvemmgso.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163aqobsdch.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lygrkwmc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fierxlpe.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163orezjkge.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nouvtvod.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wbkvrsmh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hgdkxhdu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qrnxymbq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qztxeuth.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mfqkpaqu.html

================================================================================
来源：http://www.sxryk.cn/163abdlxawi.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jermntpe.html

================================================================================
来源：http://www.aibaodan.cn/163gapsnlqw.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vlbtkggt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163qprinvgr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mllhfpte.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163llxcinmk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163khlhcowz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pfeqdsjk.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dtjmcbmi.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ffjembnj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163eygldkvv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163brufdsat.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163bxkvuosw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vqlbinuu.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jorxnhri.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gjcpyijh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jebirdwl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bkjwspjf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lrdahpwq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hpeimcvk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jtvbokii.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ntpxmjqh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163furtfqyx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lsajxswp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163niugwwmi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xdqlcwzs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163dheiqirk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163amiqtnpm.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dygbmjjl.html


<!-- 参考信息 -->