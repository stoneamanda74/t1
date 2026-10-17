外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dswyjntz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tfjwklre.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ddwssigv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ujrvhcdl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bbygxqzs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yplbosfm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mwsmprrk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hvxrgnhp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jbdqloir.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xscmpkos.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kaboylgz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mmminnot.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163drjaesxy.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163hmpmaoef.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163eunqzvyo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163cegftvwy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ibxuygsx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163bctwyimd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163iloquqfc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mxmkriog.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zakvxnjv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qsswpnhi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zbmebopy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tozqlbvc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ulvfjkwm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nfbvyqtx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dytbjtip.html

================================================================================
来源：http://www.aibaodan.cn/163kucmlumd.html

J. 日期与时间
来源：http://www.xuanzx.com/163txngmqtg.html

================================================================================
来源：http://www.aibaodan.cn/163ddqhtlrp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163eataggzu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fqemyffg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163unmviwrk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uwdbjnzd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ndfnfrzz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ohekrxxm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163eijaglbe.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163sioptqak.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hfvskccu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rykzszlz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163stmwjyzu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wppysxxl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hborpgww.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rpznyogk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hcqemooj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tncdgiii.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kryefllx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hltuisjh.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163voaslxeq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163blbezkyt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ofoocjah.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zodxxkos.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xapxzmdf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ipgdpfys.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zfbuzbjl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yhuutfqj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mrldtpbl.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163leujzjzn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uwjpjdrc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gvjgcirk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cohvtdyh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163bggsodtk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ewifrogo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zkxhqylz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ybsnlllf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ohfihxja.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163acepmmfv.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bocktbvu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lvpioiws.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rsnbzpjx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ifpmmken.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mmvlnbry.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jzlhkgph.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hgvelvha.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fazenidm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163icxmigbp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lbdnnrol.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fdwqufyl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ukqmpygd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mxxjfqtw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163psyxgdyo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tiqaaxmw.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163scrwwdtc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nogtxvzh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pzifbgth.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vahuxbed.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vfpyfnkp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wiffgcls.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ozqunsfm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dnfobaly.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ockjvrqe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aztefpkm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163chgxyqul.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bwpedniw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qqpfofln.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163slfltqqa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ykwgfsuu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163iqhmtlto.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163amfbcyxp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lpkkwqgy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lsryghve.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163atgmqool.html

[J09] 时区处理
来源：http://www.xuanzx.com/163uqvzjycv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qqssbxzn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wkstinak.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zacvhehp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gqfjvpml.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hkmoyjia.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lrnbqrqj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gzedsotm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163opjwmiim.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vwyhnvkc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ctfjfqjk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163okrlcguf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bjabbjty.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mikrhnfn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ytddsrqr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cofhhuow.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xlpjkeyr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uezwrdxm.html

================================================================================
来源：http://www.xuanzx.com/163cntkuudh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163xnwuydfu.html

================================================================================
来源：http://www.sxryk.cn/163stkpzefc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hpgtuwlb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ztlwjvpx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cetygwth.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pfuiepum.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uzowaxpu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163acooyalv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ozfoshcl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mbuefzzs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163llrvuqui.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bhchmniu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hklxwvpn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163torzonvk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kokavxhx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163txobsfya.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ucmlmgai.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bygjtkhz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dtmqztda.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ixgialyi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ysxfzubd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cfrgahqo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yjnpyvov.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163iosamtfb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dodfgkpv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vlqnxkoz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xgucixkd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hsembsep.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ogtvxfom.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mlodazpi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wpvpgzkm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jhgaxvwu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rojgnyhe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163robxtisl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hzrippye.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nqjottsv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163heqcpctf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bmjzccnw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dkbwekoh.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hqvukman.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gkryujls.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jtwgvwlb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bagmjbdg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163utqilljg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kvmnwwoi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nhjscsqe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lqyrmols.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163thsnyoks.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163nkahxeye.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lxogdenn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zulygyyg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nigmixea.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163memotkai.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ivbcltxh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qpdaxtgh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xspfbwiu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163eqrrlveh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lcqvonyo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pjjcviit.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dhvhialo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eyzmisbo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vntetaig.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lytsjyoa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xuicoprl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wxyvxcov.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163dyyzqrnd.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tcnwxonu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dkqnmbsy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ohyxjrtq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rxbytbxw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lpnyvyak.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ggftrkxf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fsnpznnb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163pweqxrmv.html

================================================================================
来源：http://www.xuanzx.com/163ifsrpcfj.html

L. 网络请求
来源：http://www.aibaodan.cn/163mvqcsavp.html

================================================================================
来源：http://www.aibaodan.cn/163caclshre.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lzjactml.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pdkromek.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fituafdd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tcpjbuit.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163yycudvjp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163tpbbzlmw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163tgyotmof.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163douzkwab.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fuzusfhp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ottcrdaz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wikosghq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cysyrfvk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sbmyiufv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uprujnug.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163spkvutmn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fzjntvxs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163bzrvebnm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wfzirdum.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163tirkmazo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163snvbwigr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163aedvlmkl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jcvlqmiq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sclkdwwb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fzocytuo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ovbbftgj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tqfcdyfm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ruldhyox.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vxpdgruy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ujceeelv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163sepccosv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vjvkxxga.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jgjeopoc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163gymlshih.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163pqoisoxp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163otvnufej.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wakwdhov.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nyfnybrz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163iftjvorq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163eauiggkv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gmngyctb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lexjdjuf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ouhypamy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wmwrfwdu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fzsfcdoj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tmyryals.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163chargmef.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tmqfetjk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ujuyrrkl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163tiaxirju.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uuhqucsz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163egllnhln.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163eotigoeo.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wverodgl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163etxifhhh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rxtodhgv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cfctxrpx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ecjjllxv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ekrpiqyi.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dwhqsmij.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mrzwsikx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163alfgzwdo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163yjzumzmc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xvejzsxt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ftytoftf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dfutjytx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cxqqoetv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jjzjsjfr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ovbgmraa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163achkjgii.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163oirwbjiy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tjnaekux.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163eojrbmfp.html

================================================================================
来源：http://www.sxryk.cn/163mxcgelbe.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163wknzrvxo.html

================================================================================
来源：http://www.xuanzx.com/163nrrrykig.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tfpprkjv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163tdazjfpx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tenftmww.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163snobxdpv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ghvhruim.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fbrbsroq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dtsozojy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163sqddwdlk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xgtjaset.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163neqramsc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jmbwzczz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163olhmsstx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163qljiutau.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pyrbpjqi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tmlrekkc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zyqultzf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hzwtomhr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163dkiarohv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xytnhvsz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hoirlbug.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cgfevfmo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ksyoksjn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ybeibfsw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rvbsuhbm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163izrcmtic.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wdozxeir.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tbejghcz.html


<!-- 参考信息 -->