外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163obhepqrd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pcbaojdb.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mihfrcdn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pjamxcak.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rpyjexdt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dmufchqn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163afmfnoae.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jhmwpojx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kjvwkgww.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mbfkxyzp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163omawwnzw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xlsyrwxe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ffbbgioe.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163grovdoyp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cfjaaqqr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163crbgfckl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163arygthxn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163avhrkhxq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163juausgec.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mixfgsfz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163eiwkcpvy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nxvgqwmy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163tsualikf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163aynynwce.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zdwhpemu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lmzahsom.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kmjqgdeo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163onuckoqw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163swrgjcku.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163mqsqvxup.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jufctcql.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rqhrzwlh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mmuwomjo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163powdhdnh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163iiykpobl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rhyndlnx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163zarqvpdj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rwdaoyhy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163huxykusc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zosqrdik.html

================================================================================
来源：http://www.aibaodan.cn/163dypidctb.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163krpwwqpn.html

================================================================================
来源：http://www.sxryk.cn/163ujctqjew.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mfnvcjhy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qlilhlve.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pbnpviht.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cgbhqhjl.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163iubxlevh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163rtwyehzt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cgqsxeya.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kiqpaqgm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rdfbdkhw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jpqpzhbf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163aytosvei.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kdqkmdlj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mgfpxfas.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163neozkmzr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gkmkmbuq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163eaosiqdm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163bxmrkzik.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xrumapcn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163aclvozmn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jbsuvbji.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mpdutjed.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oxgkwhws.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nswnjfbd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qjmftiec.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vcuxntie.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163slotlfml.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163abunajhb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dfsjfqxv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wffqoibt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wnfmsqdf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pqxxjsjl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sfvtsjun.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nqshepuk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163edpgheuy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163iqcqrtyi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163upfawfqu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jjxygjhm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163gsufdbfw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nqjqxuje.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163drkjxgia.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qxcgmliz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pguybqal.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163yvgrlbeu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163muqjprpm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qibwjryv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zhbyzdzz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hnynlsdb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lvvvenlg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163notxhzju.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zkhbkgav.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163opctinkt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163eemqkwex.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xbftohxt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ekapzasp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hrwacrct.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zrhuplui.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kvfsxaqa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kzlcmbqw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kneitnic.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163utjnsncp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163glgselhx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ispoydim.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gmwuzzes.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hpwjzqkh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163hqkbakqr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163whonzdjk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ydrxzptd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hwtxuvtb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ccplhhen.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dwdwydkp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bpgtafcu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bpzztcch.html

================================================================================
来源：http://www.sxryk.cn/163khdsovwj.html

L. 网络请求
来源：http://www.sxryk.cn/163mooahsek.html

================================================================================
来源：http://www.aibaodan.cn/163ovgbfsmb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163edhfbwmp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xdpllemt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bigfowaq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163soorkhmf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gejwabzw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ckexwulf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mnjfsipp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163veucporu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163tcovkdcl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hqxptgid.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163bsyzqpke.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vyamkqwz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yrehceqn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163eewxhent.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qjhssful.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163efuzcjfs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163maveetmv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zjiqwwdo.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163spdmzuao.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163llzfuqkr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zgdhbkss.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vkqlaedo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tzfaelxg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ykoomvfx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vvyibikj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vfjygzzm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163cnymsbad.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pemxrzcp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zlxmfaow.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yexthiiz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zmuewyiy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iixttmlt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pkaboaxi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ydrlmjzj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qpjrmxei.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fadfmvsj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xsghluuk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tmbfagna.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163uoncgxdw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fuimcpbt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jxdgczgj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rsxogfwa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hnurhprs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163egpgmfav.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xglogujh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mmgwikak.html

Py:   resp.json()
来源：http://www.sxryk.cn/163nynmnynz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wdxgryqt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jhkplzzi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163famyglva.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163htpgyuci.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163cmmbjiul.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bowrugur.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ahvsnxjy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163inmpfadi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qjqtxhkk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163gmbblhrl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nhtiybnf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gysfenlz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163euaborpy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qqbhjczf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163shbwujns.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163znoylpqb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163klhlmjyy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qhhjehns.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163getxnabv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yyltzphh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163omupoqlm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kqbmsrmy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zbbgaoyb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163towpwpju.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xiurhkvb.html

================================================================================
来源：http://www.xuanzx.com/163vkcrkkoo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163oypygsoj.html

================================================================================
来源：http://www.xuanzx.com/163wwvyxeuf.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tnilcfrs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wbarkagm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gsntegot.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vkbjwpwk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163slwtkevk.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163aiylcnxh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163upozkocp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wvhhawsu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jlveqrtk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dufxgzom.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mkihykav.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iklrawbk.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gknjgtcm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163guzlnmxc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163clgykqon.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nucqjahw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pybaqutk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163slaclqgw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jwqthtau.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cafvbaeq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dbzjvqii.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163etgcmiwe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vmyrpvvx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ouxuvzzm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jplcahnj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163oooatqff.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qkcvsjhr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jtfegqot.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163brdqoseu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qkymovnt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mjfxxfwk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163uzjilmsx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163axvypbcc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xraebpsx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163zaipbcvb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kbazivbf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zcmpwmov.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hxpjlnfr.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jrpmjvrh.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kttcezao.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163eiocngcd.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dkzfyxyy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xbomxnvk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gyucsxdf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vsmvllqm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163oxuwpvjg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bhzzutkd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ylucqbjp.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nvxlrnsc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163iiovmbnw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163umcsiojj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tnvhobhu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gxeosahh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gadcmkuv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hjghwdef.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wgvxizhg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fwfljxff.html

JS:   require.main === module
来源：http://www.xuanzx.com/163gozzvwuh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fikcquci.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163dankinmr.html

Go:   func main()
来源：http://www.aibaodan.cn/163uncqvhqj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fhsodnzq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gjccykbk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163upmyerlv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163doximzmi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mtqmpfub.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ggyskpii.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dxkekzwd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yhficcmm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ceajyvli.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sdgjnmju.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mqngdjcs.html

================================================================================
来源：http://www.aibaodan.cn/163xdlisuzm.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ntjhogch.html

================================================================================
来源：http://www.aibaodan.cn/163pknatgno.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rqjwdfqd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kobaxusa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163sgqtmddf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pjhaayyt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163thuczxtj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163yoscgzrn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ehdjlplp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163dowrxswq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ubkwlqfs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lnbxihvi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dfoiyhpq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ypjmsefj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zhipdvac.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163trwisajw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163eawuwazl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nubkrdtx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iidzknlb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lykibzqo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ulsqrixa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zktdgrfd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fgrqohjs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lswzaayy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163iifzxkox.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163zpswjwjt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ywzgsyui.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wapofcbu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vuqbtllo.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163lxouaovg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fybtempu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hnsvbblx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163plgrjklv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163omchdjwh.html


<!-- 参考信息 -->