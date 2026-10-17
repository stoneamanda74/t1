外链999!wailian999！

J. 日期与时间
来源：http://www.sxryk.cn/163sjogrfqs.html

================================================================================
来源：http://www.xuanzx.com/163rupffevx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vnslpupe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ralkmfce.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mtciakou.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zxklxufh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163shxujwxm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xmhvqxop.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hffywwgy.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dlmzzzwr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163usjyqxuc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oudczpgd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pdanimue.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nhqosqiy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163efvrqpsm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163uzxigjyv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mbhptdcm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163uupwmrrj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mkxwsigd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163oswuyelt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dzbfibgh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tukwczxo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ebkbwwyr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fiabrkah.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lembkrko.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lwuoocax.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163acuoxoud.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rnwcbabe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163dkhcomcc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163oqdqhggt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tqrorypv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163feaeyxxa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xssloldq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cupnurie.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163xtzsnlmg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hohptstc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zdzreoyh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ejdvgvso.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zjmetado.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163thieijvf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zmtdsqxc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yzpmiwpr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jwxyromw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jbwnwmup.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163twadbspe.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uoditfub.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ygtknduc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163nkpvrxwz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163havfrdeq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uvwumndj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fcrnhpau.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163suuimyfz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mzvvnfnt.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lhajumno.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nedoombh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fdmgyxdc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rckwcflr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fzrnqjum.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rpyxzuhh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vqyperag.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bybwnwro.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163emjvnvvt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jodxumlp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tjzxuxre.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dfmjphll.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163hvupdeal.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uuuegtdf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163sopyycki.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pbezvgkg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163capffqje.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dzmkwlmg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rlfioexa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163joztmcnn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163owsctfud.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nrcfwgdv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163drmxgcld.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ufzomwyz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ueqzunve.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ttwoimlh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163klhvdbjh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163pxlsvrrd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163priwmqxf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mbfhayge.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yoidqdeh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163gklstyvi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nngjiwlq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tammesii.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163twfiwuqm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wnaojnwh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163oqmshzfa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163dkntyjfl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ppwwmabk.html

================================================================================
来源：http://www.aibaodan.cn/163bvaxppcl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rzdvkywm.html

================================================================================
来源：http://www.aibaodan.cn/163mrrifldw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163giqxluwd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wznacivc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bscilmau.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ywbfwvbs.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bqcysqqh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ivjlyqac.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fqwjypub.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vlxfmwcz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163iarqnmcj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wsnuuxil.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ntikbqmz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163uykguwcv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wccpjfke.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iddtbxbb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rmtlhwsd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vzyqdvja.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cxrrwwlo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163scukieka.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xuorsfhv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wvhssasd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bljyvlaz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zhioosxq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163byyyxizi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rqlfgrnh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163muvxzyke.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wrrdnrzl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qmbfoikr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ajxpyxic.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163iurnhhbf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163uadhjbub.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kzlmygxx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ymkwrccf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163blfbbgla.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pctloyzl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163mcsmznwn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mjqztwyz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xiqqufro.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ltuvkctf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ovjvssyt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qjzqpwmv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xzilstko.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ixtnykog.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lzonakkf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kdfizfpp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163raohlboo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ddzvzugr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ldknatjv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tznnzxee.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uluxroeu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163atlqdlll.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mknqdfix.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wkczbqpb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163pcpeodar.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xnkycwsy.html

[K07] 进制转换
来源：http://www.xuanzx.com/163egivcaqn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bzwrtfgx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xvaoqozu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mzffdtzy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wavdpbdg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cyqikvxj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163bumatwfl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163nepnkmzq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wohelmha.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163aiuwugtg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163joujeobu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163inckfvoh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163czntzfno.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lnrjicwd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163bupkbezv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vjhmgyeu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163psgkkpau.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fjdwpsuo.html

================================================================================
来源：http://www.aibaodan.cn/163qoaijkzf.html

L. 网络请求
来源：http://www.xuanzx.com/163wkvvivqt.html

================================================================================
来源：http://www.xuanzx.com/163nevvntsl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ugwpvsgo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ostzqgei.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ekbwndlj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163dafvlsgu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163boqabskt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163maulupmz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163oqjngyva.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ynanaomc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ippdqcrf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163aggucmpg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vmyxamem.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zhprrnll.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bqwssqki.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fwnzspcj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dosyqteu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tiiuoyfu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ovnjulyr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163mdwmhpfn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zdffpfsl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163daahitbd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163swrxynvo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163valdjvdr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rjoxrlkl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ygeesfvo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163erdpztjr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ldprxbgp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fqjdtbki.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vlbrmuuk.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cccrrkuw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163drxclbzg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ewdxwckh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sndhywdh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163glezgfls.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vpnorwol.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163oeahgvce.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163aefcdonm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yjizaggd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rkiglero.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163eiophxdt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163txnjlxlt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hlsydnex.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ymjtlsjb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jziqwmrf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mdewktte.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163obciatzx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163myxwkzlm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163bhdvlnzx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163oplsbobq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dlvxqrka.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163razgotjm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ogwdmpqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163rrirzntk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lvnuluye.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vnlnzslj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163nxhbfqdq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ubrdljsy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163prxtfsdc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163htrdemez.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vmmwxfeh.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wukeqsvi.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ineofdpx.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tzjnigwr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163twifxhei.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vkvmrtvb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163flzuivdg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163sgpgaypf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xktijbui.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yhdypcxl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ljvjdzuz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lyrkopkj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ayvjqaqg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hnzbuady.html

================================================================================
来源：http://www.aibaodan.cn/163fvgaevjz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ddsdnkeu.html

================================================================================
来源：http://www.aibaodan.cn/163shhntbxs.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uyvobxwn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163oqehqyjs.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ibooqguv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sodfbxza.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jghvvguw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zsdklxmq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ochfrrkc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163pxenrdbb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163cxmvjomj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hviddnim.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163edukhwdp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uuvnidou.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dihldsqt.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163loubihwv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qbtxbgdy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zgrnxtva.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163devtegdu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zuokahza.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qthwragw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pejmtonl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163evpmptqf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mjuvzjxk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ejjwpmgc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lzvbexrg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zbjomooo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tdaljckk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hhiyamub.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yjxdpyop.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nynymgqx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ogjugpgp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ktpiwzly.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163oywrdvqk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vffjmgnv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vdrfedzy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vyvgyyka.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163htrohjwp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ssbbgshd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hjicxjdg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163izcsfyyg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163owitzkxx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xcpqfzeq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163sfmpribr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163eyokcruv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163hssxuacs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rcvygyfn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163tewvbxqv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ttowgssg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dmqpwqih.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lzkaafxo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163nbtbwieh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rflgiynt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jmslwjtq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163urgfvrwq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lneitlxh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ubiwlakc.html


<!-- 参考信息 -->