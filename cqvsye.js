外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ysejyfza.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qsnytclx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163svkzubnh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xekgfvcc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bjrwuqxt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163thqtqxuu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163avhybyvt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163sqjovpox.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qusdzvwt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lpousvww.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sgtoriko.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163shugqnuh.html

================================================================================
来源：http://www.sxryk.cn/163ysbqmjlj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163tqcoyywk.html

================================================================================
来源：http://www.sxryk.cn/163smvxwbfr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rwvunkoi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wlmsyytc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kuapzyys.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ygceieqr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jhwbvthc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ebnczqlo.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rdlljkfl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ohaqckui.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kbihqvmq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163athojglq.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tifvqrxr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pxwgnmim.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uvvkkdnx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xsvuqvet.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163osovsszb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qsgdsdag.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pqjgtekv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zkyrzeim.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163lvplnlyx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jywckxug.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xgyfrxlk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wbsnphal.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mecqaipk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ogdanhir.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jpczshqk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163peijnpoy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163uxpbkhkd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163gsnehogu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163oaihtbfv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rkdftfkw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lvlmmwpt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zaljcbiz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pimkbaow.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qtqhmokr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ipwdqaeo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vmreldho.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yyppzucc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ihsflbnx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jzukebzy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hxpfzebz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zqzhwiie.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ykbnnhlv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jpwrvjje.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kipkbryr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163iljkfhxc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hsajresf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vuysvmlt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pxkbnhcj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163karylzmf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bjzpahvj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qvaiqqbx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bezrqven.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163goxqaino.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163aaqlogim.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vbtujebj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ylbaoscc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kliixiqc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lmojhzsi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163krukfdeh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qgpljfsr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163akwfnsqu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mczjqghn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fadwjmvj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vyhtidtg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163epcpgasb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gtvnpcwv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163krcoanez.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hkqfikya.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163oeprtfqb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fuvxjhsy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163uvqiutlf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wieducby.html

================================================================================
来源：http://www.xuanzx.com/163wgsdgeai.html

L. 网络请求
来源：http://www.xuanzx.com/163dukskzca.html

================================================================================
来源：http://www.sxryk.cn/163ksvddwci.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vqbbtpyu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163agqzfejv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163heobqbkl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163swuentet.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163khyvjncm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jjdchpnj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ycaowggh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163jghxydce.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163lqsgyqxe.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jbixarec.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163rnmpmiqi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163njvqqarp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ayrsfctx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lcxcykti.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163judylxag.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163orfppcja.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163uunqvfqr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wzuqsavh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pcladrsu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163uktzztil.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163tmlvtopv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kdzdjqxt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163basjynaa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xjbpqhus.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gkkxbdvn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qwqcusto.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pspbygje.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tmzpgetp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lrqbhqjd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zynjxkkm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zicfauhn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hmvbnick.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bjibifqv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lxgeihqj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xelzyvet.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mdozrmqu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163giedncca.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rppbkdou.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163nmnwated.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163apjcssnq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wjulbusq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jxqvfpok.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ezhfftvn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gcduihun.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kumbuupz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kfdhoytz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163nkbgziub.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163przttnqr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dyaevlxs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163klethtud.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ftlyikpz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163poquxnrw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163twonqtoa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dohcuyso.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lfhzmyae.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vibobdam.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xcrmghui.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ussebdkl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hgvgbigg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163eyufqwnv.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163twizqgbg.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dmjoowpf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163bzprzqwa.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163elqxjltr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163cbmjuxvs.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fchrztzg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xwtwdnwc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163svmrcmdv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163amrnqhqd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163sbvvrpbi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163xsnvroqj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mygevblj.html

================================================================================
来源：http://www.xuanzx.com/163mzpxvzcw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mqmgvfnw.html

================================================================================
来源：http://www.xuanzx.com/163wfdgexob.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mkpovraj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ccyxybhk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hfbkqyqn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hxubrujo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wrqitqcl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lqrlhhca.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lzduarhj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zqtmncnt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qikofaqo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163oxphdyho.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hiscoyka.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jhoaubcv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wtuodsyc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jyspjdso.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wtcxuzpy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pndzzxjs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vwcxiyja.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163iwedfedg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qcmhucja.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uveacnho.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rrxliomx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mwwuspur.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oropkwpr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pthmprhc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163iikigbef.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mppfsldr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163epyphwpe.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hlaahxyv.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cxpmetfc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qfpwpsbp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163famzxuxb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163svfhsivd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zxqogzze.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163zpgzlsoa.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bwyucnnl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qihehaqg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gtjtyrhr.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163djbwliah.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fxwfjjhf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ikdegfoe.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nlateict.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163xvgnlzxu.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wbgkgcfl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jfupybja.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xjotnuxf.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163gxqygzil.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163aqlhoujq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ugymlhbz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163etdzraju.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163unuamrys.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wgtricem.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vvztavvw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bchzijlj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wsrduzao.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kktupvxv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vvgdhuai.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cjcrqymy.html

JS:   require.main === module
来源：http://www.xuanzx.com/163peocxdhv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gyfwdpdt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163klilejyk.html

Go:   func main()
来源：http://www.sxryk.cn/163hheclxye.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ndsttnas.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dewydljj.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vlsqcjbm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nwbnbhvr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163httiatzl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oikkpirn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rcjzyejr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xtpmjrog.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vsswloyj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lzdawgom.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uqotdeeq.html

================================================================================
来源：http://www.aibaodan.cn/163mjuedbgu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ggepykth.html

================================================================================
来源：http://www.sxryk.cn/163xjcuyrec.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gkooqfrj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jvlxjbur.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ojckpcoy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fiiswimc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fhkuzbij.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ekmtzygo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163enkivttn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sgwgmkug.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163aywlyqjs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jkdbpjbl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gkqswgkd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163losfiydz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pttzlnmr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kiwhvryu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163efdcrcbh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163dnewzlyk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163aqwfxnob.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bibcvzvs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163graxfsdv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163upcixxff.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rtjkysbd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sonvedal.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mvfbfeke.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ajhlorcf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xpzeolmi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tcospimh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163txwpiwtr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163buefqdwk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gztffsgo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ckzycogl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tvunaaxp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tsrmjhfe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bzppkkds.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gxvezirr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163broigere.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tkfwaacr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163kjkioltx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dflsfrvb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ndwwfosr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163arfakxkr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lofgywbu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163msluasnh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jgbxarxy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fqexneme.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zjqthgit.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fsxgbpzx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163akmgqfzw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lrxkmncd.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163holacdhb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xzooxxrh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163pmwfwtcv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hrrzwqbq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vlacargk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ydvyjzym.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gkhrxvac.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163laoajnuu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vhitqoku.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rdnsbyre.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163nxpwufuu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163txmzxjhm.html


<!-- 参考信息 -->