外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163aaedxymm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vhbrktqk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163uxnxzfhi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163fbvestqf.html

================================================================================
来源：http://www.xuanzx.com/163cpssobjd.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163gbodsraf.html

================================================================================
来源：http://www.sxryk.cn/163qrecvccp.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ymvhjwzx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ynytltiu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mwyanjvy.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mxlmnrgx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rapqufcc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wtadwxes.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wrctynha.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163sornwjhh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163aexiujyh.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vmbojflr.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qniietve.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fgpqaznk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163conlqefo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lhuibjmb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163glicqjuu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qcatmjts.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163iybazvib.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xpmofjkb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163spohzqvn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ilijazwp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bsbzyyak.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qxzqklgz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kdpecjja.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163snqnilom.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xukgayer.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vtmmwxmb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jnnzpdxa.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cznxozwy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ulcegwbd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163slyqggrq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kqzvpiaa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163oaakolym.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163pzcdcooh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iysqclia.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ljfyltus.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lxubnkvw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163phtzskiv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zpoglvth.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163clkakhwp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gwbrllch.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163huunpoln.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ofncatml.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hqiihbsg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jcsfsqii.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163oougitgc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163oymmovwh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xpjszodn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nsgozuod.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ulmsagcg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ogjadjaw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163kebmmmrk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qjrkkuoh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rygpmnzw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163obkgmlfa.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ywuekoja.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163usisawui.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ojvogxon.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ucrkxyrd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tmeheqwt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fifmhscf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tbgroqzo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163aheqcelo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163edwwarpm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yqudexnf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163usvyfcxt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wvxbbvcm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163epvpfrsa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jvjdcpht.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163scnkefej.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cxgriqzr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gebxpvjb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pjkjsgdu.html

================================================================================
来源：http://www.xuanzx.com/163gekxpsmn.html

L. 网络请求
来源：http://www.xuanzx.com/163yfsjcbwq.html

================================================================================
来源：http://www.aibaodan.cn/163qkvvaaae.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163awfmttqf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pxhpqivc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zpudpdpm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ypttauel.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hhdeimyp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zwyavuob.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qjdcszyk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lsfbxvje.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bcpqypyo.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tigstggt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163cfnbywyz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bpplcayh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hofietoa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yxerihxz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hveoelzd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ehuocjsn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rnshyspq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vjbsfiut.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dgdswwao.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yumebsgs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tkhmvhpf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rthhrfab.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rulpfcky.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xthoonug.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gykaljmr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163otfgsbdh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vtyzfjcv.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163earttnjs.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163uipiajef.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163phjigjuo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kumjifbz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163edwxbvoh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163aparnzge.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ysricirl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gxlrbbpt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wbtdinlt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dhsxwwpe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163npsgyywo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fgxodsps.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vdkgtlpz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rswoohsi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ugbpeapc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163fnbsuvos.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zgvqajyv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tpkcdsqw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fhafokpv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qpzdxanu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163stzwjzpe.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gmgjwpfp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bgypruma.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ndreqbjw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ebthcprw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bpxyyxxv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163uqmumwfb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ccjaadht.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gxyemrxv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pdksezwc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gqickcsa.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kysfsgas.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jgewcppe.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vuxepfdu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wevujceg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163yrtymhds.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uusfqgoc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zgbajuqd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163uoyhbcyz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rjokpnjo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rbicsmcy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163uvogpnil.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163okwbwvbk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nsfvkuzf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pbayohco.html

================================================================================
来源：http://www.aibaodan.cn/163upngydrf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wmjrzvdc.html

================================================================================
来源：http://www.xuanzx.com/163zjkzajmj.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mdvtgjgx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163kkqkoelk.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163syxycltr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163eahgkgvm.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ijiuqfix.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163gzkttmgm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hkjtamey.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zzthxztp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xsmgwqxg.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163jhnymldy.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zjibylca.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163tfhjlfry.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163aomrxiaq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yzbiquwn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163pbowzvuc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qietwcyu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gxzlgnza.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xtetysws.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163puglvymu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gfpcgklr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qlijvmtq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fafhwegr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rbsgyrlw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ztwgyqkz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fsczzqzu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xdtfpljj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xkbitjqe.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163kjavpbwf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kqgeeiqn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163azbjvhng.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kcsgdwtu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qvlgoioe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163okiidodd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wzabhfjw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jixdnjdo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ookogyqn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163yfvpsqkd.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xbldlqjd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pgafoxsq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tvvcbzxc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jmqrbpwy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163uscmmgxn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gdbsnjuo.html

Ruby: exit 1
来源：http://www.xuanzx.com/163hhzinqfr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ydlzwzjs.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163dvnefzny.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gnywpfvu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163drebvraa.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bprcujfb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dvviszwb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163arpvcvpa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163khknvbgt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qvfcisdp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163qadbdpdw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fqppgbfj.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xjtikuun.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hlosxpsm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gcvrcewt.html

TS:   require.main === module
来源：http://www.xuanzx.com/163epznrpnj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ammkgcpt.html

Go:   func main()
来源：http://www.sxryk.cn/163oroezlyp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vrftvakb.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yamrggqr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163osdaccfh.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jhaujzlk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ubctzkgp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jkosklhc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xojsvxcc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ptscztsy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ylzsozmo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vasjbcct.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ymrpknbe.html

================================================================================
来源：http://www.xuanzx.com/163fjcfsmby.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rkulnwaf.html

================================================================================
来源：http://www.aibaodan.cn/163rpdrkgkj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fporayeq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cpbnpnpw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mxbydgsz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ichwasnd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uhzutvvx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163efyzeqbz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zwzuuxje.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163tkbfslmd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vxcdlzis.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ziznyxan.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cqiwrkxd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163fvsksgtw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163itfoxsqv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163esxjexue.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163eyklolqd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163uifnotnt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163oieeeacr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163cywrdikj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fnwqbzvs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163aqzbbanp.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ilbrjjvj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163szjosjfj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kzobucvy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fyxezois.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163agvrjgvz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163diabtqzw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ncskiiuu.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163pypitrmu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vluozzjc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hzrkbzbq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mljhuyka.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163eofyxriz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rolsaarj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zmmwakhm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vhmsedvi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163prgjurfg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ijoribyl.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163tfvhbhfc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bfsrrtre.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kqxecppx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ewspwhwj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rcfqtily.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jagscuti.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163eavltvzs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tykutvbg.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ygrtntqw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qbyoitrl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163nnjhmaxn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zacdhmvr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aaoommqz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ivikcjrd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mrcxakdg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163irccitja.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mzvwscnp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163octkxehi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vfwmwpjm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jrddbgdm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163psmadsxc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tyzxulme.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163pjfcxire.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ujxnicjo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ibriitej.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zcaxtgej.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rflewcrh.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163cepyetib.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vkjkkqiv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kosfavyi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nzpldvlm.html


<!-- 参考信息 -->