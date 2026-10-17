外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uihjytau.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163znfnwvhx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gphgyqds.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xfswtxkq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xrowbgxv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163twomqgev.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hrenbdfa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xukohpoh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qkigceal.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kuawrxio.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hzyugtio.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fbouwafw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163suejttzx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163myuuotho.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ckiytbpv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uovmmxmm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xxljdngg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fqsueyll.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gliqnbdk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wpufzzfr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kuxgysla.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163srmobbim.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hxmvzyjv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lyibzilv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hxmnsqxv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163oxzwdtmm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ynhzsbki.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mnjpaimf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vhxxkmmq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ihhvnmvj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163iuhkgqxn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163dpglytwq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xpojrdml.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xtlrboau.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163worsiwiw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qepoqbgx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xsklxijb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rzsyngoe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tvnamams.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tcdmcmmr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vehorgvi.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163meokjgau.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ywondplt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163uagydygm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163edpjyvuo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sgalpthq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163skfdbyjo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gaylykwq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jkddaomx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nsmgkltk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jjjveotu.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163njcjrita.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163obwiwvlj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bbalvxoj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tzaastns.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zfdogvxi.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zwepjtih.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163oadthvin.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163swulbiae.html

================================================================================
来源：http://www.aibaodan.cn/163vccxjzkc.html

L. 网络请求
来源：http://www.sxryk.cn/163ldtnlqaw.html

================================================================================
来源：http://www.aibaodan.cn/163wwdyjyxm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xtjkthsy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lhqtzcgi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fmkteovy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vlexkmml.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kmlkahfz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ihclgrtr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163plbgskgk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kyfrminl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163unbfvxiu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163rvxprdgf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tpfheukj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fnszhyfg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163iifcptrw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163spvygjsk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zmbavzgz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ftzigkri.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163intsmrjr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163mtwgqems.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xjizwgja.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fhrcamtm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163adzlsgya.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bblxadtu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163isugsnww.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qgbvbvrk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lndjteiy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fqyiucon.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hnyhadyq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nbmakmmb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hkoyjzab.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hnmtxfuh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mdwbeyyj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bxanyknw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ohcmucwl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163amhumpcs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163tzwejoqs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fpmhptyi.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fwmsvoer.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163idkvxaod.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wriydksq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dxbshgiv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163crfhvsvs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xsoxuwsp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rczzjrrd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163rymcnykt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kezhmbgn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fqqbtbgr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wfbwukxa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163olswlaib.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163mftfcbca.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163settnxwl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nxksbirw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mbzluxbe.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pticnxcg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mzzcztic.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163pwyxtrxm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ljhjsubp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hopxfxpt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ccuhmyhi.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163drhvdshu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gnxuockh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ioibbymb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163yzuihbqx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163boaupggw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qmwzaonu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pnwdeinj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163guskxejj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xvnlfcqv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163btykyzkr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xvwdnnme.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163omuesyvi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bnlobhqc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163auchoseu.html

================================================================================
来源：http://www.aibaodan.cn/163cytuofic.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163piyvtlfb.html

================================================================================
来源：http://www.aibaodan.cn/163gmqxiasu.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xevwcezk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pykysguu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nchenmqd.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qziolzsj.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wklpudpt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ptvfrcxj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xgsleomh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zwtbziqu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ptpbsfux.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zxexkwvs.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wgnycikm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hnzdusdc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163swjtowjb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tvxblcrp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fnrdmlvj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163sprsykbh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163yvntuhii.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163dchfjqim.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yxoskwwm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vraeclgq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163upsadyep.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xfufrypf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xdfxpvzf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vxznmohj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163uejawbtd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yjedhjyv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hyybcgat.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sqikxstj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jrjerhga.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mjohhutb.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163grogzhjx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ztelggek.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fcxqmetd.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163aiziuszf.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xglvyanf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163umqskgqp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163tqzkflej.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qrlpjrur.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vqayvpyl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qdrrspuk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163twyqlqeu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ugfcztun.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qtzyznwg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xmzpucvf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bwdikhrc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gfspyzjk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xvrhtukn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163iqtzwxix.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hreyyveq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mdsgpspf.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tldxiqka.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dxsithcf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qhahzydu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tzcnawps.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163fufgugns.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lptlixpb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mtrsgixf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lmskgffr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nkxcdbtt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163brujzaul.html

Go:   func main()
来源：http://www.aibaodan.cn/163fhawsxrb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ghgvxmpb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163njpphokr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cbdenzhn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lxthigga.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163phtvnycj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vznckjqd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xkymsbmw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hwzvtfmp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ajtvmelq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vktyauey.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jgqyfwtg.html

================================================================================
来源：http://www.sxryk.cn/163ogdxumog.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qujicfic.html

================================================================================
来源：http://www.aibaodan.cn/163lstxmprz.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vjjyxcxw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ftpodydz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163caqcxifj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qfnrlbup.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mvovuboy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bbilyggp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ivgkkibl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163oagyhwso.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nfjrdcbt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qxukpxpa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nrrbkhnf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xrszzvfz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uupavnmn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ylbwlqqh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jeauqhyi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ovmnbihl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ugrkedzq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163brnlyeij.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jxlxokac.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163smwqakls.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163pyseoehc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hcowveix.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163paioouvl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163srqhcxrl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mbahnsqt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163uyrtbaqu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gcwamemd.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fuvnqmml.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163trufwelo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fkdyofvw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jnctmvnc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zhqtrgmp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fcphsfdb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lbmigtpg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oboktxvh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dpjwtomq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lagacbdo.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qlzclwmk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163eiwtqgyo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qaychpvc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nxszsmlm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ovujzoct.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163watmcvld.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163baumudkx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mmhqhdbk.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163timkjiuv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kazidraq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kpqcrsus.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vxxeigkh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163azmfrzig.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rbdiuqlb.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ijmiykrp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163auzgiriz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fkoctxrr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mbnvbgoe.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nnrqcebo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163gcjthfwn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163malcfjvi.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163pqotoefn.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bcaqccer.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ilsekjsf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xuwuqqgm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ugqsiuex.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163yviaahdz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163esnogccx.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vcaudzbf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163syudiofj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qkyoyylv.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nhjmmned.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xpnzqefu.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mjveyrjn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163btlrseqf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ydmrvmbv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nyxtlgmc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bievcntn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rppprdjo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dhqbcpog.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163anzbsoli.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qophwgul.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wyumtrum.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163habjupbt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xctexgbj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163cgmjnubl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163czswnpmp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hexievel.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163lesxsjvb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163rwpodlab.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163wpmxipdu.html


<!-- 参考信息 -->