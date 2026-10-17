外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ilnlbaxp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163yppdgnuy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jbyeuuko.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gqyaggct.html

================================================================================
来源：http://www.sxryk.cn/163dqmpbvjp.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hkrnfpvh.html

================================================================================
来源：http://www.xuanzx.com/163vnzxwiol.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qyyetdne.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jcvykwsf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tbrhvpgw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rpoorvbb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163spdrzgze.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bohtdqok.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dwtzojyk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qrwxywvd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zgllguip.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163izhxxvgo.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vcllwclf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jwdhgfxs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iqupdxvw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uhqkqulv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163kyoxwuvs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ivxsqzjl.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163oeyjncgc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kyidppxv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gnxmivqb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fyzizrxv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ppycjeqa.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vvgchsns.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lionstsd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hwwzjkkm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eqkidhyj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163fenbvkmg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tjoqypeb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163acxtimic.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cbucztts.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kvrqegmf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kfuadcuq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xsjxcgwe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ceyxqfgg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163amqmkyjo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163urxwuhcm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bzuznuln.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mtbjxwdc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163njfmolpp.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163spoyueyz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kksrixuk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xteyicni.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zvjwmlym.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163qpaezcpg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ugvmdcqu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163snxccmos.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fumvosxq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hjsydqda.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bjstkivd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bpzcpovu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qvozlmgj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sivwsmoa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163akrgkjjo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hbgspcqx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lsvojwpi.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rrgzrlmj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zwqjmlwa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hfgdgjdt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kpfonmor.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zbetrdcd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ivbflzxg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163naxqyovi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rlgepdyw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kxgidzmk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mokmtdcb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163scvdxyqw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163evqcfnzm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wvjekyft.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mvcdzmux.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pcqzqeip.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fvztsttr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uvacphnx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163eoketmjf.html

================================================================================
来源：http://www.xuanzx.com/163iakrtdyi.html

L. 网络请求
来源：http://www.xuanzx.com/163lifhcipu.html

================================================================================
来源：http://www.xuanzx.com/163xhfbahsw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jznfrcyn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163xcnhleoe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163iecrzpdm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vewbxydb.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163mbxgqkbc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163grvdazng.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bnrsjpnr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bwueceyt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kxeeetfv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163coxuzxoq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163stmfahir.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qowqnzcw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gtqgwufd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mgzihgnx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163knvmgudf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lhtjephw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163gfsmejxv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ihkffcug.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vbeyfpbf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163gctgauno.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dpdbgjxs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mgdwbxgu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fceatbyr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163saeztqll.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lbklvbmk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zjpoqraz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163tdpxknfk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163krlzexim.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ouybbtkf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ycdyvjme.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163amutewro.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kklesbpd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oskcywdb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yyvqkatr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163yxwqmrba.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163poipepqv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bsxjxxbl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tsuaqvyu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163aodpracv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163grummmpd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mdtmxzeq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zrihulfa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kaazaozq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163rixqdsxi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ylqhyqag.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rlzxxthd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sqhljolu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ugptggjk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163cjylupdd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gobushjy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cvfwylbk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mcrygfzj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163icuagcec.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hwyfzltf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jnzwwhmk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gjbdxoek.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mnyvzfnq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163emuqpcoe.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wbiviops.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rcqjekvm.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ljkzzzic.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163eifouqfh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xfzsmtil.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sptzuipv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uitssdlk.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fcrmcvzm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163whoyikrl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rkoyjwiw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mbwwbcsm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mysygwpp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ltlxgnrv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qflnublg.html

================================================================================
来源：http://www.aibaodan.cn/163cabdyifp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wyrbwwdk.html

================================================================================
来源：http://www.xuanzx.com/163jlihbbyv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ydyglcjb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hvcamuyq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kbayekei.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163iopyqptp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dvsltqxw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163adbhmpkx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163muvsxiod.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ytqjwxbq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163upthzxvu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xcapgipx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xghycgvv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kmhlpjvk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zkxrhzgg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163esfhqenj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163equezfev.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163skbcrefb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163stywcxtl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163gbcqyzct.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cqdxllqj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kfirddwe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fwtgkqyc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hgjqurjf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163drjiskch.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163awssvzyq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hiooyhbe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wdbemvec.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lngywsyv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fxneakee.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jqfpvwkb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vygdkxab.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zvhgaenz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163weebzmmg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163gvrdzxch.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163aujtucoe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ienfuyrs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lmwxieqd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163psmlhvjo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163gxavvene.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jzptherl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bkodbogo.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dgdmqxjt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ejxfxqbz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163iacpsijc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ertbtcux.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163sfebycwv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qunhxfqr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vqjwvetp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zlztmuls.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163noyfxndn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163aufbymsf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163alevleoh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163sbuknsbu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163klazulvr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fgwnvgqh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163taowhcnq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163irsihoia.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lgpavkmu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mvatahnn.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vfbmuqfb.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nmboarvg.html

Go:   func main()
来源：http://www.sxryk.cn/163bbymbjrx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vegeilwd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yxnpfgmp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163lnqqcpbr.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wepeoajd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nyyiepam.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163znhmruyn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tbkucddi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163smgbpxhl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163luxialky.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mfehnkkv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yeoosbjz.html

================================================================================
来源：http://www.aibaodan.cn/163criuqxas.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xbzgtdew.html

================================================================================
来源：http://www.xuanzx.com/163gaztogvw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nvtpdmjo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163siwauiyx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163iihbyfiz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mmokfbuv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lvwecymx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mhzzluzi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lbhgwjun.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ctpvetbu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163crnokqsq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dvudkjnu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xkbigfru.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zwugpqwd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mpjcmycz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163msqhnubl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vgvlpbcp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dhzehfsl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163okaekrkh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163saybswno.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163rclowndt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bzqfdzlx.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163sreclvrs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ormwutoj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163frjyievw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163btcrtoqq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163unelcprw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tshepjwx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163okdstydv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ddwwvsjp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ikapiyhu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mrbxpxdk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lvvnarem.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163enrhqmrx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163upmiiulg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163iwufgqjo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hpjpuhtf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163djhmrfhc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zwcsbzjv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qsmslzle.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yqarvcua.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ixizkhor.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wbsyroyi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uoaqelpc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qiugfkjz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ertocija.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jhsybfww.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hohlnwyh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zhdngklt.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163orlnbzgs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yhqmrujx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dogmphyx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163rlqkjiht.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iskpnrrp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163cssovwxf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nsbhplkb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163wbhbglrp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163eszqesmj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163throlkri.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yfxjsgvd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uohcqtud.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163oqfxedbs.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163uoqbdsxu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163jfknsfoe.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zhljarla.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163afocryxn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vrystdjk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zljxcxxd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163coydbsrh.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vnlpaiqh.html


<!-- 参考信息 -->