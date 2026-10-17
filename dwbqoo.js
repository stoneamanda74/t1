外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gxeksonp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163pdzpddju.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jrondfcu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ldwvuhio.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cxuseyeg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hyueuaoo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163dwvusqpo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163aljkppup.html

================================================================================
来源：http://www.xuanzx.com/163vpjlvmta.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163picyripx.html

================================================================================
来源：http://www.aibaodan.cn/163iriwvglu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qexcpdfw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xkvncjhs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ytsytjiz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tnkfbzkt.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ejjrcphx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nxtsycss.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rtobiktf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ucresfsu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ikmtuhwe.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fchbjghe.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163oicatrfn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yjofwyxx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kftaiygo.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ebgudxay.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ikspqjvz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gghbamca.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lrtxofbn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kqvgfqbo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hpdtucmx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xmfzwocr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oxshautw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eysaxoto.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nmbwmsel.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ssuhhxry.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fxtglpsl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yafsrqpw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aeipqkii.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hipdxfxa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xnfquzxt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rhouygbs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pjutqrzu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dvlbbnxy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rmnldhpu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jzdjvdgl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163firnolpt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163adkfhbgq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163twjhcxpf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ehqwloig.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kksvnqsf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sicornzp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bometwon.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hdnyufcz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163sysvhbux.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rztwirjq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163duopgtjp.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163yntvlxfh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163aipcctwe.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jrqugvnb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cjtpjtpf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ugihevju.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163btsnvrwp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ntnpkadp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ofhbjgor.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163skrhrhbg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163swpdtbzn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gfycnfue.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pfgjwbyo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mlublvdx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hkegzooi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163nqztyszi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163keahtqeb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rqlwnauz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163watrzcgs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163amsxprto.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163nyydtjkf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163hwuowrqw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jdukmkqu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163phqlcvhx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ddijgcej.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cxlpvokk.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bqadnntm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163axdnzsgc.html

================================================================================
来源：http://www.xuanzx.com/163qplksgsi.html

L. 网络请求
来源：http://www.aibaodan.cn/163sucysalf.html

================================================================================
来源：http://www.xuanzx.com/163ibztgcom.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sufbyjsp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jbjsjjcd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ahzywdhx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163obshpufa.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mxgegbxe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163puxbkhsj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tcpgcisn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jbuiphvj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vooknpkj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cjccdbhw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mdamioud.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163upkyozja.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sqieudtm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xbctijts.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163awklnpfh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xqpixoso.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cipyykst.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163usxkjjgv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163stvqoxtx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cgqfvjez.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fnbatifv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rfrzazou.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163evxfsmop.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cdqkafjw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bwuyybkx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mztvlnnh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jambwxbf.html

[L04] 设置超时
来源：http://www.xuanzx.com/163doqiqjfe.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ecratsbo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vpbqvqim.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ddanvvhj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mknnsdhw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163byeeutva.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hpvqtmnr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zxqogkdt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jzatcmkq.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fmvpvwkd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163huestatd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vugwompp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sqlilwvn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sipdkrkl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wfvnvqqg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ogqqhdzh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lzfjkqep.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jywsyllk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163cfaysjun.html

Py:   resp.json()
来源：http://www.sxryk.cn/163czgqipws.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163suogqfqo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zppkywvq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wujufqex.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vinfgjzd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dbljdynb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163thcammug.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ciwvwgcl.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xnpzajjm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163stsunita.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jkcsfmyl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aqgrmzqo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ughoflxu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163oiljnoia.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163qlkuhcgr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rjczsczx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qvivjfqw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xwcppota.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163mwszitnp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dkwnpyac.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tufzayua.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ivhyfywt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163utpyktrp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rmcumnal.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163fkuiqmth.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gvzlltzc.html

================================================================================
来源：http://www.aibaodan.cn/163owxhjzta.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yddzokoq.html

================================================================================
来源：http://www.aibaodan.cn/163mrzscvuu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ayraicec.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vpivdqwj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163atzkghgi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ytqqyryd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ouybrcih.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lkqmtdja.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vckvywjv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163isawbxza.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163iaaqitdl.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kyxzxqme.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hpxbzrkv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wecfhsmn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tzlafobl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163iuqdqvza.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163iqgcnhpg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vfidndny.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vbfdznun.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163epwnlsxa.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gdnckook.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163flsqhwvj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ncqiutli.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lqzpekok.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kantiyfc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zekffeac.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163khywnmgq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cfjywumn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ljzrpnwj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uyrwrbhr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vbvtbiec.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yfogjpdy.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hbgnphir.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ppeknfwk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163aimynmhl.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ivxcclzl.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163otobztls.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fjvjelte.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gpabwwdc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nooegjoy.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wjlqarqy.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hrqhjtgw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163snrptawg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hsosvksb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163aevemxjc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ngopczgz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hcfryxll.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ddoigwcu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163msqeiprz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ypbwztcc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ejnainjf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nbmqjnal.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sflznhnd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cytbbobx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nycciueh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cuuulrhv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163flsrwxez.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163uzlrnlbc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gdrixmrc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163icejvhni.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jqyvgmze.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jzottpup.html

Go:   func main()
来源：http://www.xuanzx.com/163maoxtdqt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vngeelkg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mztdhzny.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mmutwtjx.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163armqcabo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nkvyazdj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ilzbqqys.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uespjmaq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163aqkjynrr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163osocqfuj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163btkcuuks.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fsrmsqyy.html

================================================================================
来源：http://www.xuanzx.com/163bfjpkbhq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163pjkkqfdu.html

================================================================================
来源：http://www.xuanzx.com/163igkxpyaq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rijcbizw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gegrvwkd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ayvfpqfb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eknfnwto.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vllarsyx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yshwxzex.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hccrolyk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163gngbffmu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hcujjeiu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yqjcbuxr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163svrxbfsb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bfedpmmi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bugyjeth.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ermluzwn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163icinfbhn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163anqocups.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ozenzofr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tquacrpx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ydjbsyjo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163skbkjwos.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163brfgqjrk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hnisbpqo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ezpvwzgd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hijxwcvq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163phudrcqd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ivtzletn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ridutjcr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163unzbcuuc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163baxsbwti.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163stefrrlv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fbxvisuo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wmmldthk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163wkciabpm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163dmyesmiq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163scioszgu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fbczsxhe.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rhzvdqmp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163upwehtru.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dbqjuytv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qejcugow.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qfwmziwc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dzfvkers.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163pidxkazh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163yhtgspwc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ywvbjaqz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ojmcrhic.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163faiggltl.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xiovnwfx.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163prslpslt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zgjywyzi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163idwriyjy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yzgzakdj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bjikhylz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163orruxldd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163esoqiblf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qndzftyk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ntxkhina.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qclnydzx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163tlvtydgr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163okeimcts.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yhupqfvd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pajkynfj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163eiglcftv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jgxtfscs.html


<!-- 参考信息 -->