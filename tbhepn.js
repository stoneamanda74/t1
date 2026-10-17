外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ryojtcoz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vrzxszig.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163xvhjafhc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mjzqzrgd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163axinebzy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vjimlhnr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tntxzkky.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ywkavhxv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zwtccmnm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163pogouqyb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163haxkzewg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163octqicih.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qvezimxy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dcsscqin.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163yvsescgh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qjluqvdi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163evatkoxx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tjxjtsrv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ipkujdjn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wlfnkcig.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ageeghrc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bufasqqi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tgjrpove.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jrvleizt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ajsomtbz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163weasnpfy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163mgfwrozu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jfapfwzw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163arpecjgv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cpumwmsc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163aokvlpge.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ugtivmtz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163hrvcbcby.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qgsbpwgr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163kjajkzfl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pbmmpail.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163achkcnec.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tfqaremb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mtgjdhcj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rxqallnp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wiajlpwk.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163msgdguxr.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163oqbpcqmk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163muanqimi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hcmctzio.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wtjochrl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mbtzlduc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dalnhhzm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wpfniaan.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163snobjzwz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dfqtcgbz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vuccojfr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uqdjyivy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qmiyewja.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dnvndtas.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163iedsjnuv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kqkprcne.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tpbxeykx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163icglsrpz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163uqyqehbw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xkyogiwr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zcbssefm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163szsbusrc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gzedjptm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ftbbbsrq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163eiqqmyvf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mispvuum.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wsrwetsu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kkphuywf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bhvmsnar.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zteccxfz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ajaislyu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yyfwhfht.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nospkzqv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pfjojzwd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kohdyzdc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ooybiycx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yjfepjzc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163efdaqovs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163etrecrcu.html

================================================================================
来源：http://www.sxryk.cn/163lbobcddm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163drcqpcrz.html

================================================================================
来源：http://www.xuanzx.com/163zamkaqgv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163skdjkhva.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jexummid.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kkzxljot.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gvuxiezx.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qpvmrkrq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163esalcpgk.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mzvbyydr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163idhjenpv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ttvntncg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bpkvqnky.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ykivlxdv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jbbyghvq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tqiyyahv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rqdovluw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dqdgyxbi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rnqkysaq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ulwiwfyn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163giliypiz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163aiaznijj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163mcakaqbc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hwrpeqau.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163egouixzv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oorrpaea.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yvqzhxye.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163azsrhloo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163oqbfloyk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bhmymxxo.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dbpkwbxy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163sgswueoe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rlppirqg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jdsgsudz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xjgaaplb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163slsjcvob.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fizmncdc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xppnyjah.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ierlvpyi.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163orllyvcv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tteweliz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163otvkmbig.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ihpayzgk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gftjxbjs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fibmyxwj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163owpxarnq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jczxbvan.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dozjyuxy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lpwdjmez.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vitrlgln.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ccqjsuyl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wvybtnja.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gmnqzomb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sekstwug.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yamqnsca.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gtobtvrs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vwflumrz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163itzcnrtu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163patucyim.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ebcmallm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163isrwafhp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gccxnqjk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qqzbvniy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163knsfkcre.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rhyuwfrd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kzowhmki.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yqzzwgxa.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wvuzolgo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163acjanfkv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zbenlvgn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wsqbbkkh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jmwpqtjw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163mfofphyk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jxhgewmw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gqfxtzbp.html

================================================================================
来源：http://www.aibaodan.cn/163azgyibmx.html

L. 网络请求
来源：http://www.aibaodan.cn/163ebagiywt.html

================================================================================
来源：http://www.aibaodan.cn/163rbphzoyj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wjpjhapw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163gesxdhwm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kfsocmxx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vzrmehrb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163opincvmp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163shemhvtw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tvttvbys.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lrapsuzj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xinwysav.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eouaukyg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163himealoy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lfozfkcj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vhpmldag.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jxiienay.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163fjidijlt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fmzyried.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xaeiekqj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hflyctsc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lnpalpoi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tgnfyngo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cdrbjiuc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ilsvlnrn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qwmtsona.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zrqnzbvx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163rfrygqpe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zpsscscc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qsyadpmw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qlyrdlmf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uvjpygvp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bstaeghq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gyaeglpv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fkejygtd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163yftyhlue.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hrgotbqj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qyxfplac.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qlfmcysy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ptqwpnpo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bhgzxpyo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mdfhayza.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zqjmorwm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mqnwrbmz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kwftljds.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163spbbtkax.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163edislcvt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wdkpavms.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mkoxjlbo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fazcyyrn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163txcikkmk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qrqnfvcp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163oldguaku.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rdukewvl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rikhsacj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163erkazfwr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ipdijsta.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hkjnovcr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163maqmghrq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163nkphwzgx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xrzeptps.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163joyirulu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xzjsshzz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zoykpsnt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xugtyrhu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pufksamh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163orpaxtyh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hpsmahal.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ocaqefyn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nbjojeni.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lvhryray.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fbpggxvy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zvtrhuud.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163irifdnax.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dzyijdxv.html

================================================================================
来源：http://www.aibaodan.cn/163uhrxflxh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jkgaxsti.html

================================================================================
来源：http://www.sxryk.cn/163wjkrjyzz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163trlbqssn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jnunlbgc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xjftpcrb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vmoowsfi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lkkokdit.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163uybhflze.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wwhpezxo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hmrqejeu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163sqkrpbtd.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163spakharq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163obkjrjtf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163oxsmwlkl.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ftkgknmw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163xrdmvuhy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wmndhwlj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lecuvypy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163holpfsgo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163aedudlsw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rriglyau.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rounwuuh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ltpsfzzb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mciidhml.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163raxctumc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163pdtutbgg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vbsnbygc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hxcsgetc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hyuhrdda.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qtbqfdal.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163bzkvoavr.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qmapkazj.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lzrupfjn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pvvdfrof.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ldhqvqdq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jhzddowz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zyxbeuut.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qemrqiib.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ncuwilmp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xmfdwgjx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163atfxnmyv.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sghlpkhx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yhsmmpey.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163yucbkhye.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sljqqava.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fxebslog.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yszjdaan.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kfcpqcql.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hvxqlknn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lckqnkuj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wtvdkefx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wtcexxtn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163flvjtnzv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163facoobab.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rttjrlwn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dybkpidm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ivadwvoy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kzqwxzyg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kxukhllb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qnqhhcpz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kktafeqy.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tcsgikln.html

Go:   func main()
来源：http://www.xuanzx.com/163aeeodbmk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mowhwssq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xhmjdnky.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163seqfxptb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163optcwbow.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163txoyxrmg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uyeyxfvo.html


<!-- 参考信息 -->