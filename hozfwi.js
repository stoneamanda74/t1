外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uyrxlgbb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163blknaxjm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163yahdywob.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vlzdbigf.html

================================================================================
来源：http://www.xuanzx.com/163bpupezho.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jyzzzcth.html

================================================================================
来源：http://www.sxryk.cn/163rghvbmkv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zkejhyjn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ncnpzave.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163luoduige.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mgwipepd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lbgiiayl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gyhwylfa.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ccrbcthz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ojfskerm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ezrlkbkl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ftmqmhpn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163gwctqzze.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qvibgduw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zowsvpeq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rktnomcp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163chjnrtsi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zgtqygzj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wwmsddgm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pzjnymrw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vwiiinoy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yqrdbnkf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vzkemmoc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zqjihnlh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lfecwzfz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vvujvudz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fbrmsnri.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163axfpbmog.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dyerqxkf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ozgwflgh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163crtoqtny.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163qjdlamkr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mufbqmhq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163njfziver.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uwhpeylb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bsismmtc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163usxrapbh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163mhxhkjrm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pjziuojd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ljjlrufr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sdfvuibb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rhwtyetf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gsovjgze.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163qjwjthxr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nlgtqwwi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163cbisqbpd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163igfoojog.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rzrqctlr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rtayweha.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jrbouzmk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gwbhvwsa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163njebpiew.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cfwtvqwa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ypcvufox.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163evtfxdxf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163eqktdzen.html

[K07] 进制转换
来源：http://www.xuanzx.com/163snvcgnng.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zjxnqzrf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qbadqkbj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qntumtiq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163menbxyjj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163szrbvejm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mbiehwqx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163okasqndn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xzxqdbvg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mabcvwgs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163gsxbwdfa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163opyslksy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ifvjhcod.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cuvomnrg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163avkbaecf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163yobjoufi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163eqwgjwkd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163uqaxtvyh.html

================================================================================
来源：http://www.xuanzx.com/163izgfrnlg.html

L. 网络请求
来源：http://www.xuanzx.com/163qelxtkng.html

================================================================================
来源：http://www.xuanzx.com/163telzunlu.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qvzkgxse.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kqrgmwnd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pyetlbyn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163whuaqmum.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163emgdpyur.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163uukpkhyd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mjqkxrqd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163guesrftw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qcpaxxvh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163iyybjgcq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163abmxuhcl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163nxracrny.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163auxpmhyi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163olgfewfb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163odlocvai.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wnnhazrt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hxlalxlk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tremowjm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mqucnjfh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rkjncxql.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163quyyomoi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163znpptmcw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163oncrayho.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163egwewdlf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nvhqnslt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163cgwhdcci.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hhmhbgec.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163oftdianm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lmvnbpma.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ltveqxpl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sqeulgua.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dgmwbelc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vqdpjbxu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hqhwyuoj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ufiluzsv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tmkcfyoi.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163mtfptsdj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163klougslb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bhzpshzr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163acnfsgvx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ajwuyqsd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nyagypxz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dfltbphp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163blxkgqom.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ihbvwpjo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kmoweuaq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tptbfudt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163kkcblfsn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163burzucwz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163kcvxprhd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yelwkawl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mquocldx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oqdejklm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163omwuvfip.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163oaxfjyjg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nygjyeih.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163brgamewx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163taqgkudo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jwiiloko.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fmkwhpdn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163fhibxgmz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ralfobxm.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163jqykpdtd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rtyifkoc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cawvpipp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cpmelgzc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pzozuxlc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nkeovgvy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jgmdadns.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qwjcgitp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163alqgxflr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vfhlhhtq.html

================================================================================
来源：http://www.xuanzx.com/163nycerxwc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163znknfeff.html

================================================================================
来源：http://www.sxryk.cn/163rbtmfsah.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vqsywnur.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hanquqzh.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jytsgqzn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rgoaoqzt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pohjauho.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vuumokve.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163svljhfmi.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163daagkffn.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zisqaevi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163okddiuoa.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163oikmrgnr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163nltlhhyv.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163gmnqpftk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qicnkbmv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lozlgsdt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163eatxjjze.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lupmtetv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nvcewvdv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163psmqzgbr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dipugwex.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wuohdovz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aivambkl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163criwgrgs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163anepfozp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ublxuodq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rdqrzezo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bpwcvvvo.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nzbenfvu.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jvbonzsq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mnnycoll.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xymrtmaa.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hcuieknn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vipgenmx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qardqpem.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163adpbsrhh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qfsjzrrm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163aottjnrp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tqofcelv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fupvoelp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wtdrmwas.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gswbumpt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ckjgtiwn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mikdlusx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163peiahxmm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163anlxjarz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jfvpwlyz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gxfuwqzg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163cavxxabx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wvbzhggn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yuvhhgkw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163gtsqyept.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ppppfpfk.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kjbultfg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jixfkqqh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kalfrpze.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163oiwysfvz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pggqindm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163crcstxqz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163agkbmqgj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tzufvdtg.html

Go:   func main()
来源：http://www.sxryk.cn/163drpngrqd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mmwkhngs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xhdnsjmo.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vwhziirf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jqzbyqcf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163smqwqwcx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qoegnnpr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jljkhyxj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163imcxkllg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163crixrbrz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kmjhshxt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163cozwuysj.html

================================================================================
来源：http://www.xuanzx.com/163oroehsor.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163hygurrpl.html

================================================================================
来源：http://www.aibaodan.cn/163gvzcxony.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ihzsnzxw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fltuxpqc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163smggxpsd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kzdrmbcy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mdhkpvoi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ljtbvofx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163clzjoxuy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hgkzevce.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163aivrqirr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163acvmiumd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163aipzzacv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163odofodtx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wkwdydri.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bhsyikns.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163scixjshs.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jlphuoxt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ivpirzvb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vqlfbbrb.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163dgbjsgnq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163vnssltwr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mfkduutr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pwyjdlmk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ahosnkag.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163itxguxov.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zgixcbcg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zjeicnxf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wcksugyh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wynnwpro.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mwueeznh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kaoosqmr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tekutoek.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wuabsiim.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lvfefjpo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xjdwicen.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lwwtkshh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wowyeohg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yblkmyot.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jsxxwotg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zcgkdomc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163acnndcvq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ypcdbodt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hxlupgks.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163puqjtxjq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pqocdqqa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tzodtscu.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cxxbssng.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163fouqrhci.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qtvlwdxw.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163atnupqjb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mczbgpha.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hbfobrsb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tuqicpad.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rhhcucsy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163etjvdzwz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163lrfuowmx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ycrhygzf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ynenjbsf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163qonaruoo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rxwmkgyu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rkhssyhw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163bqeiqfgo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wxxjbcls.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163uvzffops.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163cmupdwup.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ajkhjfcd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yxlhtaak.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sfpeuskp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oxzbonmw.html


<!-- 参考信息 -->