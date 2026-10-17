外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ktjwgmit.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tklbkcnv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tyeljkpv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qdqmmezk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vbjzhjwg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jewvnqgm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wndosxkb.html

================================================================================
来源：http://www.sxryk.cn/163tmjfkxdf.html

J. 日期与时间
来源：http://www.xuanzx.com/163cnvingde.html

================================================================================
来源：http://www.sxryk.cn/163vifpgpye.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163spumfkhh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163czkxyvoi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sorrmaqw.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rqxlckaq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gotbzygd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fspiulza.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jbxdggcz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vxklrmvn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163sgypuvkx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gwxarflo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ppciujwy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fjwavwer.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163argvnrit.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163lqzwpycp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nckwdifg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hgwkxzxh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bdgaipye.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163upzkkaqh.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163mjkkaplw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qwfhznhf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163dtpezbpt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163epgiwbyw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ohxdchne.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ylzkprdg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163pddkldbl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jmqhgfjb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163drztwvyh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nwjlpukz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bhlelwpz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163epbtwdes.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163juxydrcr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rusqotcy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tejsegdw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uefpmxxe.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163siceiqyt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wmvazgcd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163czwwkmvt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jeyhwwsm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163aqfksmsu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163avlylspg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jgedaxas.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zabkrmli.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nmjsclec.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kvtrckvc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cbeddksc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kkzfaxvu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mpyxdeag.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jbqgsqdc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tsmgjotg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163idiyhlhf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163leuxlqbq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163csvoufla.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163rljnagzc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hdnplyjo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vcmgeexf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vpiuzznt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lhmuwvsg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mzxxvyke.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ypnusdor.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lfvuzbzc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kkohoekj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ctptibwp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tihtpmmm.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qomavrky.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163nauspcvy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xdwbfaje.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dqeryhaf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163oymdqiua.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rgyrdtkw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vaykkqrh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cizifbnv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163npnillzj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163compccnr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wrfbklix.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hhgypgiy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lqtknqcq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iafhyjbw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163smskbukm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mrofkgqp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163tzdbwlha.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mhtfuebh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163whcpodjo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jakfcufc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cvapaeze.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163enkeuwey.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gfttacgm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ezsollbv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pgdwpvdo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163eejwvnzd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ouxejgex.html

================================================================================
来源：http://www.aibaodan.cn/163yyilvbpm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kuuqsaey.html

================================================================================
来源：http://www.sxryk.cn/163irfxnpdw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nngcogof.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wbtyyhxh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ttkfgxju.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zdsjaerf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kznjjgva.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dzgfrhqs.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lnqqisuj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jnydezan.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jpcodjps.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163kvgmjpvg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ymddmxqp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kuyozcsv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163brcfzbqu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lzrmtxkn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xfltwpot.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163btwmzmzk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lcymymsf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163blhztldi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163aqjzasxz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jqdtzaiy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jfiqkknv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163earanpkp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zsvwuwqv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mwdtuggw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mifgxgcg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wzpzdmup.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bsldnqbh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ugmwcmwq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163oonsfyje.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nmtgxtxf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163oitvhzur.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163taxsphaj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163aptddupa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qokevglt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kqbbecif.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ctnxvfgi.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163aypzpjyt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ihngtbgl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163csszedvz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ldvemvru.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163evrtupyx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163niwllfmy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vnakuafs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163aaovpiep.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163pzwxebwt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163amcgviug.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163yohjfglg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ewvnwdjq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hjtqsxcn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jmpmymwe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yaqxhzth.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163adlrftcc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163oazgrlqv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163okdomkle.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ghryrupu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nqzfhzab.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fgcdnmku.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zhxsbthw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ojbpktqs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kjgqmdej.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bnnbphln.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jzmdewig.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ociyarpd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xxwkmuif.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163igohoqjb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gaxjkhre.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jtwtuzsv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vysnabge.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163cbycacvf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tfatnacl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163iycxxhsc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gbuigsvr.html

================================================================================
来源：http://www.xuanzx.com/163zmextczs.html

L. 网络请求
来源：http://www.aibaodan.cn/163hdvgvbxy.html

================================================================================
来源：http://www.sxryk.cn/163uszuxpcy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ccutossm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163leupdpbv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163crdtazod.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zryfmdwc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163rqntsiyl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jqwvlqpr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wwsqsnws.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163phmvdgtp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xnvnkxsa.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163svvdatku.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yxpyxfzg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163bwpokxfw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jujiaxrf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163piooafej.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163alyuwuvu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hltdwgtw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tdiunbsd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hblrpbjl.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kjcwsziu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bxrvxdav.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bvddxrug.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bqlyiusv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ydegzdqh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ccicxnli.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nokibgje.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163afgzjxso.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tuhhuvuy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gnxzxkre.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dsbbqmef.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163abhdyvxo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fntqwzmv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163txiuzbrh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gegjutkq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163srabzjco.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163anegbknu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jbdlnezl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163iijcqrnt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163loxodlkv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dtbykaby.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xckgwcvp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uvmglnyq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lapxcbvm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163yrmaeasb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qitvymyj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163frrygzpe.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pgocxhed.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qbjajula.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jssnslym.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163intullcc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hkzcatum.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sceyrxsg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zrsuflvu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163geagzmls.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jiozydyc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cugbgpnl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ciyzckxa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qhnlzefg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yvpdoqfl.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oyqcfqlz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bpzbhtdo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qfkjeeid.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wjjfcvnk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163hnwnuvqg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163opzybjtu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dixxxaas.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xbnujyip.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dvlvhzul.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nmpvneiz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hggmdpll.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bqgwbxmp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mphpphsd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bvrzixve.html

================================================================================
来源：http://www.aibaodan.cn/163oquagbzl.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163matgvmjn.html

================================================================================
来源：http://www.xuanzx.com/163ntzsvtoo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nudppkme.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jjrmatxd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vmqargoi.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dtzpaplg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bkicungt.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bpsvmxcy.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ofsjuxke.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rzbptcfu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nwefdjiw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163szhjpqje.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163sdcfqopo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bcyiishz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163aftqfisl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vszwnnlt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fzanglgp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163egibmrtp.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hqrotjnv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dlyeyjpz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163azlklyhw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163uyplridi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pwooomyl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bmhnkoks.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zgotcyan.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163korfkoqw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163sjrqeelb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163unspugzz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wfwjynxr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163abjzoxju.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163nezqmxqg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163daatfouj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163muzpbugx.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jowtstng.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kbacdbjh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rqoznjfw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163uvgfdygs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hnvvcoqo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ppopzfip.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xgbgooar.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163eegnsgxg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wpuxitme.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zdodophi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163skfzpgwb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jtkqrhta.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vlagehjd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163whxtnbro.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163zvkixcfr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xrcrfskh.html


<!-- 参考信息 -->