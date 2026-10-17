外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ccnjyetn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xlgkuurl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xgmxvywh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vuddyedx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rkzvnais.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163lhkxdomx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fsggqnok.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163irlwgajc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lrbyfcxy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ufjvvquu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163aqkxphca.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163gexxznse.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163unbbwtxt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ypqxsgej.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nrkcjhxy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wvggmuxo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rwfnbaew.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163eetzufhj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oyeainqg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fgowsyge.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163khugkfdf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jujwllpw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qyuqlrjz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hhfyblwm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163aitfutai.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vylvqljd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ldtvabju.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rujfkfch.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fusbttmg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lasvfljv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gdbzjzov.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xbwclwbt.html

================================================================================
来源：http://www.sxryk.cn/163lxetzpbx.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ogqwpbje.html

================================================================================
来源：http://www.xuanzx.com/163ihzlijpx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gpcdnahv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gkasydwc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163glbxycef.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eikcuwrx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163esbibypr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163tkyxktsq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163iutxiaex.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163gpreweom.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vjtxlrug.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kdmcnexn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uaaoxlpq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ccrukien.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qbdmsgsf.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qbsirdox.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ngllatih.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qetiyobp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wcvtnewi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qfsgygax.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pjqyvdsk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ysgtljnz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mugymhdk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eotznnbl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lapauihk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nghhmrqk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vevtdssp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zvpexgmv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hinqkvvk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163bygafnws.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163eifvqasd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hbwztzan.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zqiwjily.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vtxkvncs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ykqmdiea.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bfrrgjtu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kmkjabup.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pkjjnuuj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ajsfztic.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163buvxgjey.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cbhlaaar.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mlumrgbf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163quogepgh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pspadtgh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nukgjwao.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qezqklrm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rgmvfnck.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163adpowvjp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163joldaimp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ylloyoyb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nnvqcvkl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zxjpfiuy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163awwpawvj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163iwwgviai.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rleefzgl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163psinbvrh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qrbgcfyt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rqrppsgu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163emqmrgbm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163agnfybva.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sqgykzkp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163boesthfj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zajzipfc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xnhcqzrg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dcsqgita.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xftobxff.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163mzttuqtp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163mzedjetj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163buomhkfd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dyzkxrdm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jlwwphwn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163emzvwhfq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yvzbumde.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rslspvin.html

================================================================================
来源：http://www.xuanzx.com/163eflfclxk.html

L. 网络请求
来源：http://www.xuanzx.com/163kubkpxlb.html

================================================================================
来源：http://www.aibaodan.cn/163rfgwnodd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163omdygsgv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163scfwkdmf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ibilsdru.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lqupkzxs.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mvjbxcdj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163uegdzoey.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bobvobjg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ywnqulpl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163rwkctsod.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163astldjif.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ykysslti.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vqagczbc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xrfczuwd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aezwqirt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163odyjdtgb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qxshimxg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163yzlnmeag.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163khgdkjqj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bvqqmrzv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163logrybjl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hpemxymc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163znsmmyyk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fvzpydtt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bfjnathg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bllrcpou.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rgilozlo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dgzqbtmw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bviqehmu.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163owasdtxn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dvcbqxvl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bhzosqvd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163foqhkupy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fhdmnpoy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163tvmpgetx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xwekxsnd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qeyzpslm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163afqarqko.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163hjquwulb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fvyjvrdo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iabqcqtl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tdmjrowy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163pfswzrsa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163pxxbptse.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zkmxiers.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ldlheewo.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yamaeofz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nzmexqic.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qfkregoo.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163khoymopy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163tzqjvnky.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163kuszysfb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lzydcjzn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lfvanqze.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ccgmlsxh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163txfmumox.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mbmchjpp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zwhojdmq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pspgfeyv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163risvncxv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ubjlymtu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163axxjihym.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nqbztjek.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zbhmjkqh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163npnhbxcl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lgddohzv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zpwugdva.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163weezcfhr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iffpozou.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lytndtyi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163djqudwwi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163khtiwbta.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mizxhkca.html

================================================================================
来源：http://www.xuanzx.com/163ahzrjeve.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vbclkfqb.html

================================================================================
来源：http://www.sxryk.cn/163wutkjxmx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cqzvghgr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bysmccqx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lapvnwoo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ofqrcmrt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jduhvpns.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163foijjsuj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zuhxxrkt.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qhbnbexo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vrjmpmzi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163siihsrjh.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163eqrfxkdt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xagbdsky.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ofeslbsf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163npwiwqut.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ktajkpqn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163iikqufxr.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xtzatmrm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yxnztvnn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tkocyifb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qrhsyoaz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lkfwvvez.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ybccmbzu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lecpnrgi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hgafxxrj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qluxwsth.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bpaihnxc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dafdwmqo.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hzutuhcl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jzoptlci.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163orezfqnz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qwkbqbnt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163sdsoyixg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dfzyorud.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pkvbyojw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163cbgdgrae.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jxvaattq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gryxhokw.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vrgprbpw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163udsyypba.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163arphyzlc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nxywngoq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163iwsggcat.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163frcfbaxe.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nhnuiumk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163agbwzykj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ddakfyqd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hdokxtyz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zhejfmpd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163lczclogf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ffxvuchu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163oewmqzwk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163yfhdgthf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lqyhbikg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jgeupcwv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163nqmwjjbr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163nitblpdu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xsojfsee.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mfmwkhsd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jxfzjmxk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163krtucyox.html

Go:   func main()
来源：http://www.sxryk.cn/163fmwhfucw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163uaaigzxv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163towspywf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ieqpdwcx.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xsgdvzcz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163cfgdahag.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ssidpdwv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zllslajm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163zgrkmema.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ezonnepn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pwdmoosy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qiqgfhhn.html

================================================================================
来源：http://www.xuanzx.com/163ielzpydq.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163zibicdgs.html

================================================================================
来源：http://www.sxryk.cn/163xwrpqqjw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ggfrwdzb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zuvvxqbo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ssvptbuf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mlglbuaq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wtfgmfyh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163twiczvzk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hstzxyaa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wpwikpfu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163gjdodgjq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163sbpntgmp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xwfbnfyn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kkylixgz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ngybwjhi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mkfqyoey.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ugmzxtip.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163pqkaarpk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sjaryura.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163otsqqhke.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zavuhbbq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163crylkagu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wqwwweet.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kgoomdcz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pppoainr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163oikzlwkv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vcsrlaup.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163chmpjcff.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ihmgulrc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hyuuwjbe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pgquhufj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bwyhhmwh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cgmozmlw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eesrhwsi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163gszevgrj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ppfaacmz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pokivoaq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ybwnjyrl.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163caqyzvga.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163smpktpqq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163lhrwhayi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xajhrivx.html


<!-- 参考信息 -->