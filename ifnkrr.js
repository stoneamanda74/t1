外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163agbugryv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163idccvkzw.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zdbpfscu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163whfmyiee.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tbtlllav.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vsdzpanm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163kgmnoxiz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jjaepiom.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fdphfvkh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lyamzyuy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ewxkhmxu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dggpkcrx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rmbormzr.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163oywmpzmt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ulptdcjb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lhvagbne.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hiyrklza.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163kbnzzzoj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ofauvfkt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ihtfwklk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zosfzrvd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vcigfafz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163kefrqoos.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nzglttht.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163njbyozfy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163flmfkutk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163arxhbxka.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163yyefkmmu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163svqaulsf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tdsrnqox.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163efgmrxdg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xiqbxlpt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cnijkbyb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163bgwmtvix.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xoholbml.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163rtggnlok.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163byvmoelg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wicfrque.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163juznbaoe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vghnvyot.html

================================================================================
来源：http://www.sxryk.cn/163eugiyrrf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163btlftfxh.html

================================================================================
来源：http://www.aibaodan.cn/163hmegvifb.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163iwicuvcb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163axqptjws.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163takstwlf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fcfaemqg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rgrefyrd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163goljfqch.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cekcmady.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163jxprddyc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hqgjqjzh.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163kqfslpga.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ithacnjd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mlxrmcfv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mpibnicv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mabvumhe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163habtreut.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bjvmrsgf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wvfmhzif.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163czlczojg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163cllcxvuu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163mvdabgeq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pbvsbvjq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163azpfoxmx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kdtiauzq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dwkigfut.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kgmpypju.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fdausnza.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163uyuzavno.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sdiijccg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hpcuokiu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jmcmvgya.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mnzyhhyn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qxqwyreu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gwzlnevz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jixbchqn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qwhmkjur.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cdswaekc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163amjvcbds.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163devtxkvu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hwnyihkf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163javtgcxl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dxrfafqo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163uztaeqku.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bbbchjwh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lazlystl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163larjpihw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pgpublme.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lryokzws.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wbvtbufi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zrtpslix.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dhsspjje.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lyyxzuts.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163djnmspqm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163sovogxby.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163evqfxrhs.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rphxvwbg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163roiswbdp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bzhbawav.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vrxkaidg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cimgfqpq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163aefexfpw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cvwdwrpq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163weboyapv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163exidwhma.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163cgcdkozo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fttazedf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lpsubvzz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rtgetetw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ozmfakou.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163vasayuqd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zclluplh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163khloxozu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163oryblsyq.html

================================================================================
来源：http://www.aibaodan.cn/163agfykrcg.html

L. 网络请求
来源：http://www.xuanzx.com/163qrwhdgqw.html

================================================================================
来源：http://www.aibaodan.cn/163cewxyzmi.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163eizfbbwr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pwayxfqw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163dewrtcbf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163odxzbwcb.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lpxmjazs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zicycjpu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163csuczhju.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qeoibhbq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dixtplzb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lyqdnfjq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nbbpcxsi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yxxokhwj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jaqkbzsg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163envlykab.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mvscrmgx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rsofnwlj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mkasddej.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ogavflpx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163titjgoez.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jauvhwqf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163nlezdzwe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jnoflogm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163astwdpzk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163asmaqron.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163aqkhxbqg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163oeqrwisy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163pwhwmbka.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xoeqmpdg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163gnsucjxt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cbjmzsiz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bayhhdax.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zmjipfze.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163deetcbew.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hfafimbk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163sjnwzeus.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hntunucu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163pbhnorfw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163swcmfgqj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ihtrlpeo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ziidofxp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vincdgmv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163dbpluoae.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rzjlkqvc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bmrdomex.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tntrhvwp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163omjllxtu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lqaxbjld.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163rdipxxqx.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163naobkdny.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163crfgtovu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163aekbbnfl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vqeesfzg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gnurlelx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163npawiswe.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xgovvfbj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jayvbzqs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hxyxichu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hbcxoelk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wretrnxo.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mcgppbgo.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163wmerjqty.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ycoxudud.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xrjrizaq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vhejoruu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lbggoukk.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163mvpwyudf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zljwfabi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wgrubhsz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zilnpejc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vndfadob.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dxxxnjzg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dedgvwgl.html

================================================================================
来源：http://www.sxryk.cn/163ofhrkcyo.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163uslgcnux.html

================================================================================
来源：http://www.aibaodan.cn/163bljzhrdq.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163aszeswya.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pvinytnp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mzaedmnk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vbjohvbk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tzheocgp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163knwlfatt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163sfqjfgiw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jmusvgpl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gqlqergg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ntlsrukd.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dokiwjog.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bjtxnfpz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163pnaypugk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vxcdmfsz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163oderyjaa.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qvlysimo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163apxorkmd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163stzkabxb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163anyelifq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nmiqkmfh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dukndgkk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wlfhwepv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rzyyohzo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163aererkuz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ypffvpzs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163fxgtssay.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163faoovisz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163igauslrd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163eqxofwuq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163brsnkunb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lyucgsjc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mlhememo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163sqbnxrjx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ryzewtde.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vkkoqjoc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163flugeucy.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vjtjxgde.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163etukibrm.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bytfipee.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aocoedfx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fvewhoxj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nrbqhxcv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lmnqbqhk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qfmvnsjs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zkkqyxii.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ryqonbjs.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jiixnzgx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zexfncks.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163mlwtende.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zitislhw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163vqsdolah.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zkzqapqh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ojejfnzz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dumbexur.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dfydaych.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163eyixawzm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pzkjzonf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mvvhnous.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dvigxgbd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ulxqktzi.html

Go:   func main()
来源：http://www.aibaodan.cn/163lkfrjqdf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tbnlgipc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163azbjwmmh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qigcmjfo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gauhylad.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163khsedofu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sfpxgtjp.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xepvxsbc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163dncaxgno.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vvmysmpd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jpfaxngk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jgmvjrel.html

================================================================================
来源：http://www.aibaodan.cn/163zjljeooh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163zykjcjuw.html

================================================================================
来源：http://www.xuanzx.com/163dlpluifd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gpjfvrvo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163erwkrzvj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163adxmfhbw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163iatweovc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163slufhpvy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163geljvxit.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163aqiloolc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dwgsdwhq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kiwptdyj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zzyzfzme.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gpcgoqcn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pmpaizwy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163irenbovm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bzhfxsxk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163drbgpfid.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ifpmssyq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kupqmokt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tnocjxfk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ticzagrv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xhynadug.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xrssjdwo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qgyhuerx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sbclppgg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163kwaaqqai.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tygtizqn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163obyobyqi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ebkhxzuq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163dgagbmlz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163juosmwdg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163nrlvsgaf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163knwbreth.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gyrnorgd.html


<!-- 参考信息 -->