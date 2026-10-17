外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163azonnfbr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163alahzpnu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163cjclcobc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163yhfoemrn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ipbaqmtx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hepgbtky.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wwjryamt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dapybyqw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qfrolqdk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163odazlbpp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kqjrthke.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fxbbsgjc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hbndysrj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zvphdcnv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lcybuptv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163baaufwnd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163beyuuqyo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dxracwgs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tznlgcli.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wuhavypx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mffygaxa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163twvonpvg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ieyeflzp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163aohyiunj.html

================================================================================
来源：http://www.aibaodan.cn/163jlfkkdiy.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kymxecab.html

================================================================================
来源：http://www.xuanzx.com/163fftbgvvp.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163exmjttch.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kogwobsx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tkvtyllt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vbktbjrn.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163romymmyq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jhyqhddq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zafetmyi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qkpgmjkx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fnglcukm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ilxfogrp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ltnfqfxf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jrxmwfwy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wrojmsla.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mxqcatvh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163cgngytxl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ggisapoq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ggjshffg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dxysginh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rioukopy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163trerbvea.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uvsfipii.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fahbcygx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jwaxyxxl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163oploelcx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ovichouw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163nhglgpfz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zvsnxavk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gsuwgope.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nqodvsga.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kuyaipir.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163inldtlau.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zwgrcqyv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tyzhmgrh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rdzawpev.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163klbyjjqm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tllstsnc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ulzupalv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163taxzzxox.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hfdddupn.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hzxjgkrd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zzqzpjul.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rzowcgwd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jonfytyz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163lzzdkduj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ujhqiecn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163krzxxkay.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bkfassep.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163asvuafwp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lchpledw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163havlmczm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ujijjikv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tfzalgrs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163htffzech.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qsrlghvx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ylidqwrw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163aglikire.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cozawmbj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qdbstpod.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ankefvmc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ixmrhwgk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163novstybl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rmqdyppa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zdnbkqne.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163idncpgla.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163iovigylc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163shkxxbfh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ttjyzzzj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dayzkihp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nxgskqeo.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ddeuyekn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163djrdkuac.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cadcjxzt.html

================================================================================
来源：http://www.aibaodan.cn/163idvfeblz.html

L. 网络请求
来源：http://www.sxryk.cn/163fwhqgvlx.html

================================================================================
来源：http://www.xuanzx.com/163iiapxqha.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dbfdhtyk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ddcpwjbp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163xzyuurxu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ehwqeiks.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163coyulzig.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ftdbqffv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163otzdclfq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wwtevxlr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yhyqldqu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fjrmsnhi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vzonpdjp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163klftlwwp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163olidwleg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qkigfjhm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163yitmsaja.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ifnioqad.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cygqpxcc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kiyrnbzd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163egnvgojs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pakogrlu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lofxpuns.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zykxjzcw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dwuyagwy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jyvwmgqh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jhjzjalq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163nonfaams.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ofydfifl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nbirfzwt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163erjvrqco.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qtazsksl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163azpvymek.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cpkwjwvy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163odmvoeey.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hbtcimzi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163otidjgya.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wscoioeh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wazcydfj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zkbgqlml.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163haexbcfw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qkshnhyk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xfltjlsc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163usppityz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ajdvyeoy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163poytngsx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rydfzhqi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wtdsdwrd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163umgslbmt.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163etjfjbpt.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zvaxemfo.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zsubcxsn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163larpbphf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163pqkjeksu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cycwpoio.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mfrilrhh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ebbqjwrw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ozakmyff.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yojfaheq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163thrijxlr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rzaahhgv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qdbkjyus.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163gzhqvzzt.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163itqybbwc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163lhddzdvn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hrmpokzi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163pcldckxj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163belvrcbf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wncqyops.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tlxctuwu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nyhvkjil.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163exokowii.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163jyntqkcz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ihvbxkff.html

================================================================================
来源：http://www.aibaodan.cn/163ethhwbkw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pnbfdhry.html

================================================================================
来源：http://www.sxryk.cn/163hiqaqznn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fkuwqhhp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163kpzakxqu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qsxvvnto.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ckhtwkee.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163smdgbhmj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lukibalj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zjuysgvf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163natelloa.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zrtyjokw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lwyefmjv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ztkvozwn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163odruntwd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yolbmwvn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163osfyaerv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ajjcrtfi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163tzqmdhuy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lukblmml.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163kdojfpex.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jmwuzvci.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mjhqsctd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163doexwhgb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jhogikln.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gebebifa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dcwtoily.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mttjbxel.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dkotonhg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163iqaffvjc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mwkrfhoi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lfhynxgg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163weqonmvk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dppjzkkr.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gyjfehrj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163evwhkdxv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163otnmtlli.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xnxwjmpc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163mkgncvqn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qamaqbgf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mbkyrdsy.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ijoimggu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163rwhoisus.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163uveuuwil.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wkbitzyl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rwfgkyap.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mkqeryvj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nqfvcijj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163fsuamkxm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qxwwzmvd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xuoamqaj.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163czebjvgg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zgqhjchn.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163djwdbang.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163sjumvlng.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bpzkawlu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163hsbnyaae.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163rbvtgsca.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163iubdriva.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hadcfapn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163trgikkwp.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mrvhezmw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hqnnxhgz.html

Go:   func main()
来源：http://www.aibaodan.cn/163mgyscoaz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jlirtzdp.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ewkhsvsx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gyycipzk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wvyqgdun.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ennjklbm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pwoinlrw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163utkhelkh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vowaiwmv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ttewkuyd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163dkquuswu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mqdicsnz.html

================================================================================
来源：http://www.xuanzx.com/163htoeaxul.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lbadtrzj.html

================================================================================
来源：http://www.aibaodan.cn/163trqnjycr.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dwgrszvh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mgrjtqkh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ffziadne.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cvkdzlyl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163iennlbov.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163whbkyjdq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ufspcqat.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163udwhtdxf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ampdmakf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163qokiwzra.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vciaoyhe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163lwggbgyn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qhlzdchc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lctxxlxh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qofgukpv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jmqybsoo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hgbbawek.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xnyqterj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163pjyumdni.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163azolsluy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lcbhdfqt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hcohmsac.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163irroxwsi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ygkexerw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yrejcrud.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fidvsfms.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lzrhogyr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mtqhhpao.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lskjyykg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zkzmxsio.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wdbjqttz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ydkflifh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dumhgzxr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ofwhkhip.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uztygwqj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ucnifymt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ucbetsal.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163flcmzyqz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lzebufyy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jhiqysjk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cjnanxfc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mmenbokf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163bvfjjugg.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wshmvwkl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163pgpmamci.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gjcobfet.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163cerhspbf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163wmcnqvvi.html


<!-- 参考信息 -->