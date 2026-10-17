外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hsffidjg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163jsdruunw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163vbynhlwq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lgfvvgtw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pwaioyys.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lkrzkyrh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163boomvgli.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tpinajpe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163iqzareec.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163biezbsnl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163znwcfbsx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vrwjrnis.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163iqsgbebl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ztlzchip.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xlyzdqvz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xsnnvrld.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163roodxvar.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bgjxccvp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163atomtgbu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xosfalyq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ymfdpfdw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hybxkunv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vytxlupy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mmlcvgyw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hyhtwqzc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163aybfhinz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bvdbnrbv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gqltoiaj.html

================================================================================
来源：http://www.xuanzx.com/163orztjxdn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163isaratla.html

================================================================================
来源：http://www.xuanzx.com/163dfeljpvl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tvjahzcx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163yrfpsnbj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vzsrftnm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lqnfujtw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vnikgjrr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ykfykyup.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hqobqtzu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wmiximgz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gssbuprm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163duxgcnfd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jgnqabuv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pbfhywpo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oeukkerv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163anvmqntr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163blxquevb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dcmxlysf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jtzvabbo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163wbewuljy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ubermksc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zepporvp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163temtcwzs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vjohtppb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rjxxqpzs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jercpbfg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jfglfdap.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163rirjnjmb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kxlwygfo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pgvtdhao.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163whzircpx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163focnjgev.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hnykvhbr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bltospgw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aykfrpap.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lzvrdjfa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163awmgdfes.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163viocfios.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163orwyawcn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rgsqjhqb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sxvwogpe.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uwkbcvhz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vujbihmy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jesgfpxs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jfeleryv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kxwsbwby.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ycserzhm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vogivgnr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qvniqwjz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zalypsvr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cufqgaom.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163piauwyso.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163rtutbgru.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qcuwhlti.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xppatgra.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ievesgeh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nsgpgqba.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fgdjisvv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mzfiyfad.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qyczmzot.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163llrneueg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iuxhuxzz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mzrqpzee.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zjxespwf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ylufmonw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163idiljukh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yupzbqbi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yexkdixv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163szqzrpvj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bjyponac.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tnenppen.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lhrrxgrn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yvvgevbr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mbpmhypq.html

================================================================================
来源：http://www.xuanzx.com/163nafkgbbv.html

L. 网络请求
来源：http://www.sxryk.cn/163qutsmurf.html

================================================================================
来源：http://www.xuanzx.com/163liuncohy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163pypsnkeb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rjmofrnv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163yzzldjkv.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tfaexufh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ynmllxsg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163veqbhbac.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163muafaunw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163exdubmzw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163sytoqhqu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ilhlplop.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pkvemodu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ahnpbvjh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uylzfryt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fwmenapt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163oojqkxgh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vdxylklm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xdbvksrn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163eitbbjgz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zpdphjdl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bengkqmz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163yovpkjvj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sxhllxhh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163unpetawz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fqfxowfm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163twwokyhz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163wobrmwdt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gxsnjgoq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mgzgfhrm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163oocwpthk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ujokdlzf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nolukpna.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pwwvhswz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rqorxmts.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wdojlwlp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163agounjur.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yykbixay.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163elnwnfxx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qxsxleed.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wwroagok.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wviqwyee.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nkrywtcl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pciawmfm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163fvhcfwly.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bmmksnzh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jfziykxp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gzwnazud.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pnfbfbin.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yivtitxl.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vnbdddrk.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vkzqbbfi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163uwgcjslj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mailrlhl.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163yvcouvko.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wqvmakkr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vuzpafze.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nfreqsxv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cdktlokh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ktwifuws.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xnxzwzpj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163crfztoml.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qoolanus.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163orvslxau.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xubthtav.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rcnjqtwu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xthafvfp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zqaatenw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bredseiu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rcnmbgcl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qdfmztzb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zbqqupoz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tskcyens.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mndhayox.html

================================================================================
来源：http://www.aibaodan.cn/163grzrkkkg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ztmksvux.html

================================================================================
来源：http://www.aibaodan.cn/163ghzucfjc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qmfvpoer.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kzahnfch.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ztkzpkcg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kvnbsvvd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163btxojgfw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163huyadmpe.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163efpnlsqw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163enhmiunb.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163csyzafdt.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163frwjdcpe.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163aeelqwuw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163odgwbfyq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rbagrhmm.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163dcvjwuym.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163seoqguig.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lolgunqc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163elbakaht.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vvodmpru.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zvrpsing.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qytqmhty.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bmjzinjx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163olacevzw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ayhmjayv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xiviytkr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163tieeitir.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jejedehd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lriozkwv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wfkeputb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vmegxsgf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163meczsckp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jjaqtjfv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ultkuhee.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xvbqgyvd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ygnedbpk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fvhxpkmw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jjrpoenr.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163essphvpv.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tjzhpafu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sghztjtc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gixqqgsr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vqfphbmp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vrxquhpr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yibghlyk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hivrqjdc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rkonqune.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163okimbfzv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163slgkkqft.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vvifrwpb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xflojioo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ebdbkozu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wwibmwqn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vcvgvmgb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zuxaivpf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ksmpxgel.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mbxqpdzo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zsqzomgy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ewewativ.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dmccfefc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163mlpcikxh.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rwygrgiq.html

Go:   func main()
来源：http://www.xuanzx.com/163sgzurllm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vhyomahh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xkqrnrob.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163onojpkvp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kpxiltmq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163djiopdjd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pxqqoadz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ioqfzakf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163kodlwxgb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163slhonyog.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mbzmexkz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dontrujo.html

================================================================================
来源：http://www.sxryk.cn/163npvckiuo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xsepygth.html

================================================================================
来源：http://www.aibaodan.cn/163igvybktd.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163mgmcvhvu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cjaswkhe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rqcbdkab.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fuimsbuh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mcnlzghq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163cnshdvje.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163prqkgxqa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ihbrbnlq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uedomzji.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163cqapwoyt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163siyjymuk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ggevpqbo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nwkhgbrm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nhrnlxvo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163xrrwdkpa.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vdinxmoz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yyqytjcf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163geiysclb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mbazncha.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kjjigpuk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kyrygbhp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163laprriqs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ljgfeaex.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163kqkllklu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lqkixhpn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fscflfyg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xkftmknx.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hkjpfwig.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rbbddvxl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163uytzehxm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lpqykjsj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ilqzvorg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mukgzoiy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163aimmcusx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pcshrmqh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163blwutlfb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163upjwgwdc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kueevgtc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mvmvdjbx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qrytanhv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uaashjta.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dvwnltwi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163stxesgef.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ftwhwwze.html


<!-- 参考信息 -->