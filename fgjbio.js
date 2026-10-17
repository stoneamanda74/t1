外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163obxlcmin.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ytkvvkxq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163venpdtkg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163caxisudj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163orohdvbj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ygqcvqhj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163bnpcepks.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qmllinmb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uatfryyo.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hycavwvp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qxrtqxlk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163lnhovajt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163aecyjkfy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163pjepmnmd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163upiitsvm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163myngxlxv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wtnumojz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xbppjisc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ajapzcbi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vejnfocc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163supnaxzg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ntmzeayh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cdwdclnz.html

================================================================================
来源：http://www.aibaodan.cn/163isopxfjz.html

J. 日期与时间
来源：http://www.sxryk.cn/163buhthfrz.html

================================================================================
来源：http://www.xuanzx.com/163djemhclw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163odzvkubm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qyhfjarg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gjvgpflk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zdklhnoo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uucwrkgu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163yyzpijun.html

Go:   time.Now()
来源：http://www.xuanzx.com/163suzsalbs.html

Ruby: Time.now
来源：http://www.sxryk.cn/163byvofopb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jdbcyjct.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vwrrtopw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hqkzagte.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zwokbufp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ddowxslb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ylfuhwzf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mnxnnjkb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163alscuihf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kkhdstot.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163twsdxzfs.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ihywixob.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qzzosshj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163zhipciuw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163flvjtgep.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163juxfvicj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163efcapsiz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fefvdavt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hmnoktod.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zohusmyo.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cbgpruhq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dfyvypes.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ybkqegww.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dlrsioqn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163grwtwgyc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163dftovtoa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nxxopjvc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fcdpcqwt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163moihorgb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vxskxyux.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ehrvkpnd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xuifszye.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vabwoquw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zxktgwvn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ylfweuke.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mjigoowq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qtlentik.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pcwhufvh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ucpaalnx.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qklwizel.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lokuqxbl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ijdlfqgi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fnfvgztr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bptzvygd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vsecdhiw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163zqevboib.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ouyspucw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163augsighc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jpzadsbl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163drilaltu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mqrlpstw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pnzmjwfz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jehadijr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163radzskjb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pwgfjnrm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dhpwwqpx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xyjyjdds.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ogweotta.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kghpgsli.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ocpmigyd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lamewwow.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xldraads.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163abfnmium.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hjumospc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163tzezkoeo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jvrjbkrk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163micfptna.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163idkvippw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mcguixwh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wohuvlje.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rjqaivwt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163uwsrmhli.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163caexdtoq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qtyjglln.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163daraflvl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wulqorzy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jqfyjsgq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lnodgnoi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ijqhotah.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163uysjdgat.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ienhlrit.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lcioazge.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ppolmljh.html

================================================================================
来源：http://www.xuanzx.com/163ytknkafx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163feqebkvm.html

================================================================================
来源：http://www.aibaodan.cn/163ukxsjmny.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163uarnybjc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bdrsjmro.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yqqbmzzz.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bxoarbuw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wkiehgdj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xmvuuhth.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lmbczvtt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tqrddndk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rgnfgnma.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163heprgklk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rpkxobzb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jakugspk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ljeeidcd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wmabtfzc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xpglaxpb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aaqrjcvm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rhcwxunm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lyejttxv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tigdxtqx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163cvvftgjv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dxplifnl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hmgzfclh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163esmjxhse.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163molyznkn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xfviadvz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tdlnqvxl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163twbuxcji.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dvxgvkql.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163aiauljhi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163pqdtvkoc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xybmwdke.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qzunahvu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ybwhwryc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mnlyqicv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163shrbawaa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hhhapakh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163udydfmop.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dkxwnjmg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qarjdofd.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163srmqeyqv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ukyafwmo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ydmleily.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163oapeoyyx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163afoqwipn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ijvlomwh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ptaeexit.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dhpqlhui.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ahqejclg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163skgslhrw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kiwerezq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163kyfmgybp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163andvbcbz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pawqbrpo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fkdbeaqx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vjtotznq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hbkeblzm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lprcebwv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mveaycyp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qgxtvuus.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ovluirib.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rjgpxilp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gxaddgpd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mxumlpxm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ikjruxgs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mpxabfhh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hodkvvjr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163emxegmpd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bzgxqkzp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163buvywlnq.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dwacubwb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bewnmpha.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bwqwrjpj.html

================================================================================
来源：http://www.xuanzx.com/163uukjrvhq.html

L. 网络请求
来源：http://www.sxryk.cn/163bassczwg.html

================================================================================
来源：http://www.sxryk.cn/163tuobohxt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yyvampow.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yvwwzhjt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mouijvtn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cekiydnc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vxrwgdew.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xbdqdind.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163tlvipfgh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xztaxikb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mofpaidl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pwvbpixi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ewoydbkz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163osjzpxra.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163butsrhaf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163grkufbai.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163fxssafql.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lhqypmfq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163biichpij.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gpjbhehu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zzgjfgtj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kyfsnxbj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163tvrfaavh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pxuhzqmy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hpjlekhq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qtkmwedh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hjobppvo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jszlbqok.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oziodblb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163sfugtnbn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163oipznvhc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bxyyogfu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mgzdycuo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pkkmagzt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qhgbhrhu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qbhkralp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163oqpanifq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lkdxeixj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ahvhumai.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163gvpvepjb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wasirexl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mthwezmo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nhnspfkr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qnvxdphi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163feteywxz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ehnunxbj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qmymgpsd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163debseibf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fwbwzefa.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163eazcqfst.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ypiacapb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163qqyoijul.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163znulhemf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fqbbmevj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lcgjjscn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ddthcgmu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rdhkvfye.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dsxenkrp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163botzzjyd.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vnjjwsrz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wyywxvla.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ufknewrx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ytddhuci.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hefxqrtw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xkcibflu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ijlylnxf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163sffgiral.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lkyareuo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ligkiddx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fmbosilc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163asejirvl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ijzndbom.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163aizrrzed.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vwxyqnij.html

================================================================================
来源：http://www.aibaodan.cn/163zyacugss.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fwzsodrv.html

================================================================================
来源：http://www.sxryk.cn/163bjhnbela.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163udldgnnv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163krwkspub.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163fptbeyar.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163krktgcqz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nueywhyv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wggzffit.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fsckstnv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163acihfnye.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nbxqvhhb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163whnylnau.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vdzhaoqt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uraehbmb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xkaplzyp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163smspsbye.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163twtxtcpo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rmvqjrnl.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163dnrcenjj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yubvjybb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kpscpfra.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kykwrsls.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163oumdmvpk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wsjtjzke.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nympmqvb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zbkneaye.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163owhbpfby.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163bpmdwnza.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mtvextds.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pibmvxnj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163yequrvgx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163aqydniry.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cggjbovi.html


<!-- 参考信息 -->