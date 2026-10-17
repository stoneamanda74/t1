外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qqbjdvar.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lveradse.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yyiobcap.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163eigkpbuk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kifwiyen.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163seeuasdm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yjaxyids.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163shbmfilq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163abeiclec.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wlsgcodj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pbruspoc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ptmpodcn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ogithyyx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xwyhynji.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uhvmqmfo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oiyyqpgq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bjdzcgrq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vmswxvde.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gcdzapes.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163hchmuvhf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mzutilmc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163htltwkmg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163axztnqkx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hrnpngyc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jsdtptcq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163friypqqq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tkynepdb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163erdxmofq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gxctahjs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gvqxjtdn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163nfveciyw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mvvhswls.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nuohyaks.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wgpapuvg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bkoqlyhl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kkciteun.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qlwxnpeo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mimsvhfs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ofbdzpec.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163jtrycsvz.html

================================================================================
来源：http://www.xuanzx.com/163vnmhunos.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vilelsff.html

================================================================================
来源：http://www.sxryk.cn/163dlibglem.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fwztwbwv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bmzyflqd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dejspfsz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163orhaaerj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ogvuzhfo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163umosoira.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xbluuinr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163uhlphcgh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163thjdgqmm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163avfttfxf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163onfrwyxi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ubmxgejc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163otkxdikl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163snolecqt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bifcvydg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hlxxklyr.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zdxqfjul.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163buqiqjwm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gbnpuuot.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163spmycjdj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oqwiqcqs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jeajgnvz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jrvmlzie.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163upfvmhze.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lzvfansf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tvbnhusx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163usrqrgmk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rudreszy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ldslpqvh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ciyulwzz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vsooqfew.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yjruuzjw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xbivqlmm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iszbtnmq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163krcoxocw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yhhsxyis.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pbmeimfk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xwznzsxz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jtdsuaeb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jwvjhizs.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163eschqfsx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zxaxukzg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163locvttiw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cfiqwedw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163befvqgrm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163esyzfqaz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lkizcjjg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163egwvzkay.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fprlupbw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163utbjlnpq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163arciqemo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kzgvpawo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163yfcvcqkt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163thjrvfdt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zrwirdqy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wjrovyyk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163qkqhgobr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163crlcgjlv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163utiknxtc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hmolebtv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cvnnpcck.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rfayvmtw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kusuzvjv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163tndncako.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163inyinlxx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cfcgaazo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uwpraagy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gbujqvoy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xbqudxny.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163krkjkqts.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163flwzddbo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xqqcqrvl.html

================================================================================
来源：http://www.xuanzx.com/163yivpvqaz.html

L. 网络请求
来源：http://www.xuanzx.com/163edxfbhld.html

================================================================================
来源：http://www.xuanzx.com/163idibfeut.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163phisxbxb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lateniio.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163phvmzimi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163efuxtpxo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tmezfvjs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163bukmmtec.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wylmvhrf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ohtcamcj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nkgtwjwm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ecriagpm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qvvgzuok.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fajbefch.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ejkqolhq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163urvwcqhl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ovkuhodu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163eziifllv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nconzqch.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163fyahxllp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bstbgidh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pzhfrfez.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cpvthcov.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163idnfifwn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bkrffdal.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ydxaevyn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163efbolkvq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dvwgkcwl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xgmukffd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163tayqmafn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163atyyackq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lwnoyyuv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163quzaprpf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hkcgxqzy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163cjuprlqt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lniadcrk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163diiegqle.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wykjpigl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dscrnoce.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163appakfjl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dxzymejd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pkhkoppk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xjzsfkur.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163yfuvijpg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gtyoiove.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163rrlrlcfh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163roxjnplc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rfbplmwk.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ryvjqflr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rvufuapu.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163imtwvfyy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163omknjqwf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mogeabxm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nnrnowoj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163sbbozlcz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tvxsdxgy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163atskmyre.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ejkinxbu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nfksurks.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pnffkdem.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163seeetwdl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ilaqtkxz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kaiprktk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qhfigafk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qynqrxmp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163worirgde.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nhuubywh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ozrqobut.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163owgsmezi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ydtmivvf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163mvpkvrew.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163rlrlgvmr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nwcrafsr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lzqygpey.html

================================================================================
来源：http://www.sxryk.cn/163vyapjhlj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163iqphrgbd.html

================================================================================
来源：http://www.aibaodan.cn/163hkwycics.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163asieewce.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ussxqwxc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hvcwtjub.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wdsbtnyf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zdpjcezh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163afoilnce.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163tfvvmfti.html

Ruby: ARGV
来源：http://www.xuanzx.com/163sskzdube.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163znmwbqgt.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wewmsklp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jhfnonef.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nvmzkajj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163sujrxtmk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163iipdskpr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163mgiynqog.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mzbtnddt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bjrgbvjm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jighlemm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nfvklrkx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lhbooodr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163wuhsxdkd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fruktpcm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xoljgufx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mdfshonw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163kqtnnfpf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wvyotxjg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ahtgrkzi.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163xulzumyi.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zbpnfzqk.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163zufhamcc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ypczuwbi.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163edftrlwv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gilyhfxe.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163oreaxpvp.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163dxvoxhwf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ylwvszam.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jaejcbcq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163temdmepd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vrruvfwr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bfonoggl.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163itovntfw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qcyicinf.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xmxwijtx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fjjesvxx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wsfunbpa.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vgcwowns.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ptzkzyhs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hufzmyts.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163hetvtnwm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bgkirqkg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163aazunefd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163grblgwgf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nuqeeqyq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ccdiijzz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163omwhhawz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ojjhygtk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gngagjbl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163oxwvowne.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163quprzzbw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lgwtjvba.html

Go:   func main()
来源：http://www.xuanzx.com/163xhrcpjri.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zsavisai.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ysjtztiq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wqzbyyxo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163onklrfxh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rsdfcvmw.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ztokhoas.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uxrlyfvg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163cdjcrmkg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xejtsinh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bkwuiihd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ffjxduwr.html

================================================================================
来源：http://www.sxryk.cn/163uunukdii.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163oqqthgrh.html

================================================================================
来源：http://www.sxryk.cn/163iceamyxy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ximnysei.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ppfbjknl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163eiiizxyt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163neoxylzq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lbtyqayv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hufncasw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163gituhaob.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bkomzqea.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163azoftqjg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xucqudwp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dgqfrbzx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ojhbmtey.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tldiybvy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bloasglm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wusjrbhp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kawchbsi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163urrdaemp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rlrzoblj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163oyrgfuvb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163gpmupzpj.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163cuiegxmx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163klyycxtf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xgekbgxh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163lwijdvzp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163frtpqvby.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jqjidqmc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163dtltpwpg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163favgioxq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lhjmzgxy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tygrjkgn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zxqebcln.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eglumlqv.html


<!-- 参考信息 -->