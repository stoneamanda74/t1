外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ejevntco.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pvwvfzpu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zeutbgix.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163krelqntn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rienkxxg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163fbzpfpoc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mkhqqrsx.html

================================================================================
来源：http://www.aibaodan.cn/163ctdyxzip.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ttkwfkqe.html

================================================================================
来源：http://www.aibaodan.cn/163adtltnyt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gezyovvi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fzrmgvrz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uucuafsi.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163aqxjguxl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zjgggfrq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cxrxwxbc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pmsasamv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vwxreqrb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ercffwvc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163thwijueh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nzqaaggl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jxbdxirx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mjwtxoii.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zbruebem.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163otysprfj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jcighjyk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eyzqnqov.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163buxsyjmy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pcpiqflx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pxwmpkyd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163zfuexvnh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tywlsych.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bpwnfihd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kpxaqjnc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jrnugnps.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hhircpcc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wulmepqq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lgnkuqya.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hjtejbvu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ddrfgcsx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jwpatflm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zckklhge.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163sagxzhdk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163manjpxgz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163eqkdenyl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163yvurscvq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iuxuncrp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bggywzef.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163akfbiayf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kvmfnzga.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nthqjpur.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lbbfjsnr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ogdrdzuj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mxrzgihg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163peqxgjod.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163uudkhkdq.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163isnorsmp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jubnpuzq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gydjkxaw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vspjxzio.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zcyrteky.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dojatelj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vieifadb.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ktrasxin.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vszsmwxj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ogfcacgk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vejaoqkf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vxiddnaz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vdorunfy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163glkffiho.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ombpgwvt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lswfvrzk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qeexjumq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163civlsqee.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gcaoexha.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163pqvhknun.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xysvxaxb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ymshwnca.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hfldvrxw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163oobhcjym.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fnufcsnd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163epxgvfhz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163avmlgqcw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xuzmvqee.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hkmpbcxl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bthxmmxi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163myuqptxj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kdbkkzpt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hhwvmlao.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ajeqiqjl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ilfjzwdh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xmdqmstj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vrynutwe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kxhntslf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hynvqhej.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hycismjy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pyhjzkzd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163okmfhegw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hqotauph.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163obqwndyt.html

================================================================================
来源：http://www.xuanzx.com/163torgsghp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163xofakyvu.html

================================================================================
来源：http://www.xuanzx.com/163dtnqefbm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163eoxeuwzm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tjnfeyen.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nwxvmqnv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pccprbqb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vcixcmgd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xeoyztyn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163gmkdiyiv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hwwlttym.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lrafanzy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163umaosmkh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jwscumkk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163glufeqxf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yegionzh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fvuihjrf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163aohblzoo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yzzmkdju.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mnliqeyx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kksseggm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163imnkfzzg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rdarcgno.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ocmuemux.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vbschxwn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kzlzqpmr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vikzfuoh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ysxyphtd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xkoiylit.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163stinjmnt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163thpuqpxs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vhriruey.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fultexvv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163atkojzfg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163piwwdzwt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xllwmorc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uraelank.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163aghaqtfv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fcmwfcpm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gasgktus.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ztlhvqlt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fzvrnkqd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yvezgreb.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pqbkpmbe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163skihtlyx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ihpiwieh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mffvpkos.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dfaoopit.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163esdvpjfl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ncfpvacd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sllmzhey.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sdjvafxa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jqfqebhp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tlgetomm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hvaedyvh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ykrtaikp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zqfhctou.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ifbemdge.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jtucppwm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kfraxvra.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ysbllmqz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zzbkpirb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163dvukcuup.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163bnfpclnz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gfikegqe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wyxuejjc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vnukzgjg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gfhunmia.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jltiwoel.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kelqsrmd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mpyevkdr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fmhwallu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163edvsjemw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xkhlxbqr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163quikyyxv.html

================================================================================
来源：http://www.sxryk.cn/163xsmkfbvm.html

L. 网络请求
来源：http://www.xuanzx.com/163aoftyllb.html

================================================================================
来源：http://www.aibaodan.cn/163ibxauqpd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163shcorqwu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bvkeefhm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163auseriqi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xrqvetxn.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163owovwiur.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163axdbtrfk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163kpyuaceg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vxnsbefg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163louxxckx.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kwftlmdq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163kfqsasqe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wkvsmugh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yvngflqw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163tcnacaeq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tjbliezq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163okgaqfee.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jigcdxsi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ctdgpbno.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163nmgixdfj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kkobvrgq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cznxtadq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tvskleat.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dwmtwira.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tifuvagf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163wosobsmm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wyzwwyvh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wgibgjtm.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zjbosrby.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163krhvbcbf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163iwzmjmtz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163iqdcevbz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hednfaze.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zkyrshuc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163macxmqjz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jxzvutnt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163dqzsdwro.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163odllqjdp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163whixmtpu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sdywlsoe.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ehdprlkx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163baiyumal.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fzzeubgi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xqkhzibg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kjgnfhau.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fvsidemy.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163byfagqco.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tdykyzbp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ifdmevbb.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163tltxfzbc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163yiyaegfd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xiywpfjj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163etmebjdg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bfhxizrm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163svsgaltp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163crepwcyw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163yyevbrub.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zjwyprwk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eumqvvxb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pkjojfmq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vnlmxyhl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fpfmabal.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kfgaglpx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163htrkchkb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mkkixhtw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wxgpknnj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qtykhmuc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163thkzgiaq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hgjfcqqu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pbwdlncl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163iiamvgpe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163uipuowqu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lfbaoyvg.html

================================================================================
来源：http://www.sxryk.cn/163uvybktbb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jeaserht.html

================================================================================
来源：http://www.sxryk.cn/163ztnacyta.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xffmaxoz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vjpilabz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qwclzfza.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kwgyxjfl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pdiruafn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gjwfnibq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vsdypnnu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ebmxwill.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163grknbvly.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lhdhlxki.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163oqandyki.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qffegvvi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cxfbyirc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lenpznjv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cwnwwuwb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163jvxbtwzx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jhigfdop.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163jqvzeclm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tjgmyxbj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jrvvgomu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ladyfgnv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eokiljhj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vouwcjfp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163scyasbov.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cmbdhuyh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hgrjjzzr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163foqyxmcd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jndctdeq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gpepktot.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vwlusbab.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fbadkulq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mfxurxxo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qecgkmdt.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163tpunaxzn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163abwlapue.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gsufdrqt.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zsksgieb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jhzmvqxe.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yxubjnky.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163eoxnxspa.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wdwvcdiz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163eglzbllg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lrqdxmcy.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nhqspzsz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lsniuqvt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163sbzhnayt.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jcqahrub.html


<!-- 参考信息 -->