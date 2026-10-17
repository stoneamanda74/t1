外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163cpbuirey.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mgsyemet.html

================================================================================
来源：http://www.sxryk.cn/163txgucjui.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zfsntdde.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bfynnovg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zoxskldw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nirfhtjo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vkghbvwl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cairfiul.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vzpldgpk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bjihdzse.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ttnodlxf.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163sfbdcojh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hbcjveyv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163iynohdcb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wveiihty.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163evhtnige.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rypvtwdc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dadpowbg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xuhvzyhj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xswdvihq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lqcnmqet.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ogejxyje.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qjahlvsq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rbanwnax.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zfbezgeq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aktisfhq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163aeqavywn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qguvqequ.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hlboulqe.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hqmjknap.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zavzachn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163elkaudet.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163swrkfeyy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163doyokpms.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ioijtbiy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ovjzchfh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pgibpnid.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163oyljptow.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163eibbnqsg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hghumina.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sancdxwy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pxqhtisr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qmfdpemn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yjzmkkvm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kqipusms.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163cwrhnpho.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nobisljv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wkznnzgl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163aqojybtt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nimynkiq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lerxbdlu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163raqhdffk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vbzmovcd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cqggserp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xrgtilxr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ynyhhsda.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ogzyhcqu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ynajcdmr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ydwvutim.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gwhzdymr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lbjedrxk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163irndhkfp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jplxecmi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qsiodsef.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bixqacqn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zzkkmeli.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xofbqigl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nhdeizml.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jomfrqib.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zrjctqou.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lvolqsuk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ngoawyvh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163oukydich.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163izcabicl.html

================================================================================
来源：http://www.aibaodan.cn/163dqvoumsl.html

L. 网络请求
来源：http://www.xuanzx.com/163ztxdcvhy.html

================================================================================
来源：http://www.xuanzx.com/163txcqtimr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163pldnflvv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163dtmesrbi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dkdtrlpv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tsbafwdx.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kwiwbtdj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163wfwkhkoi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nbwmcwqi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ikzzieav.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hssjvotg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hkzeygoe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xkpbpxfe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qrwdhwtw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163clvkdwbi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jhppkmba.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ufzcpwif.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163trhbaezf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163umuzqfmb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qpcfemax.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163etclitpr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163owdyaxln.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163txmnhdcz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rqlxkfrd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yimzqirl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163swfugszp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163njulofyn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rruxgwbb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ftzhdxkj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gpyrqlir.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yqmpugtm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bdkstbjx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ccewzzig.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gkigwfgw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vpojprxe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163iakzhlqz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163kkjoutvg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qasdalcg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xjyxngjy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ajnccyyd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pwtcuwgt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163npftsaum.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yrajnqzm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fnxuvrpl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cmwyhnac.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kjvfxbnt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jckuwtat.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rwnbtsvz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qhbbzgde.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vanlghyn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pbecrvgn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nnptvxhh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rjslfuwu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ungisnef.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163zhqnmhwj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mfxwdwpn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ibsvlvhv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xbakncee.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163uqtnyiwv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gtnxewvr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ucntvzze.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kfcitztp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mrhuonll.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163psuwhdge.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cxxfyavh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tglsgccl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fwyzyasv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163eebykmga.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zrsgmden.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bkusdaxg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ybzhhhwf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163kbmjjdoe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163unbrmyrr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cbnfbbsh.html

================================================================================
来源：http://www.aibaodan.cn/163npwqfsnf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nryhzcgx.html

================================================================================
来源：http://www.aibaodan.cn/163mlaxstlt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tkqxuwme.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jhsbowfm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cfbkbubk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ikaftauk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jtojsbwy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zfiubktq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163lphzatkp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vepgecbs.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163csexfbjo.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xrrqfcvt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vdchmfwb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rrobwlcs.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163itjwjjmc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ynpblaii.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lptzusqc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163auoblbvt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cvgjhwmi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qfkcdguy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lwcbpaqq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nudkpykv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qbidokge.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xyqgjiiu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dhzkwbnh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163kwfmuuur.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163prmifwea.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163btqtxiqu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hzopbgdg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rvhxojln.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ktpmvbnj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rngteikw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163toowixhr.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163uclqwgvr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163gtlppxid.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qibgoxqi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mrkpjzpn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bbdyuziu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ebggpuyh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163sziatacy.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fzulgzdw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163efuplojc.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xmgqdfdc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yvwutkfo.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xljffumh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163amsqkyfk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163tvheprao.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163fjeebppu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ndiznuyh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kqbeyiiy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gqtlysvi.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ctelbjry.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ggrnaulk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dqmlvgbp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nbwnjypd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163hmoxjpbk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mgtflxlc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ukrunono.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163helevcis.html

JS:   require.main === module
来源：http://www.xuanzx.com/163cjhtfmpq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xwyioanu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nnonrtzc.html

Go:   func main()
来源：http://www.xuanzx.com/163txsskmge.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gqzmvwqa.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163duzetcdm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vytwgzgp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vushzrbq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mwhtuxva.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163agmpwuaj.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ecnlypkq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ugpapcii.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hinvwbfd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bjcljeyx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ulqokgjy.html

================================================================================
来源：http://www.xuanzx.com/163zsynptnb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163wdeoijnl.html

================================================================================
来源：http://www.sxryk.cn/163juantzzh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ridzgczu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163teewnwvy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dlsrtbut.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gudjickr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bnamship.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gbyemdzm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163mchzktyf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kjetmcup.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hfgxpgaf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gnjuzttg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tbsaesog.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jfcshugk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jyhufcsf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jstpkpxk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nrisceyu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zxywepgu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wwxozztd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163yhnwnzal.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163noujiugc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lflvvvbz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163agltyluk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mmauusbo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163szweocnm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163utveyyvi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163urnhahcj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vttyfjxl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163onlgvnry.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cuadfqje.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rxtturpg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163juqjnhrl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mcwivukg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wuwhberh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rejbvtuu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uwvufoix.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163klqkceks.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wzkflgja.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ouuokfsn.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163cjwrboth.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163awzvgvpk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163faqurcgg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tlybtvnv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bwpojkka.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163oawhgnvq.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163fkmdxehj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163nxkgqudc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163hurkoeth.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163frujyfio.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163acjcrnnv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uytwgfqu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lizyvqpm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163azotcjbf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mvguiiju.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163pxxqjphv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hwmxixeb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ccfrpwaj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ysdcugzz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163mnwftnyo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nqqtcvxr.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163twohbmcp.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163gntswhob.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qzvlyemq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163sqdsxwjg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rloxsekb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163lfhaeilb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gqkirjim.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sztswxsx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cnnsbvst.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fxsvntxu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163htadsjbl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kptgtaks.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fzdymyhp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163gczgzqtc.html


<!-- 参考信息 -->