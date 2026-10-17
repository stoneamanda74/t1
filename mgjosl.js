外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wmjrynpq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163alyguxcc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tgnwxxim.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bgzsdaln.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rqkwqkbf.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yirziavm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tjufudto.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yzmmgysu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bryxrjhd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kfrxgaue.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bcigntxk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ivjphbmo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ubvcmizi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qewpevie.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xnhpsbvf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163miszaybw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163naqskoof.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ruhkshrr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rphmuosj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ltceibiw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fldxgtio.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163aavwkptu.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wxonfzdz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163hwyulayk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zzabhtqz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oojnyytz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rqcrbfmx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163oqrofoax.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163epeusdbl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lnmqmyhq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163iqxonkro.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163opauiudo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163noxklorv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zajgctch.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fokveqhn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rzqnbjlt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163iatpyjyf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jjlrlapc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163axelcnos.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ojrqsvqw.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163afkkangh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jnjucnve.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163uqllpsvw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lauhppgb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zclizijn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163inngqtqk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bootqzgk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ohlauggz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nasimwbq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mfqipkun.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163obhxxeks.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kkczxdlh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zuyaygqp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yxojkwud.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fgsfdghd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vyetietu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163bnnsqioc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ocsynudm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163eukbwhta.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163lwxvhjmj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163utbybxfw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rvvibekh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dqckoypk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163crkiekpm.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163spbytncj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ytiotdgk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163uynrkymr.html

================================================================================
来源：http://www.xuanzx.com/163ovemcwkl.html

L. 网络请求
来源：http://www.xuanzx.com/163dlitotnu.html

================================================================================
来源：http://www.sxryk.cn/163eqrhtsye.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xcdglbpj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pvelyzio.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163eccmpybm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wfslznco.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lvzrpfny.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vchfiuhj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163myckqqib.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wlciscgk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163edduqhvp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163encptaez.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163gmvceiwg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rywpkufx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cpyhbulq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ihtvrwdh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163cwmtklhc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ociwqujd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vjqdecic.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163mbwvzsun.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lfyjxjfb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163apyibdtt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163yymodgwn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tyahnrxy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iouzkzyw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rqtsgocl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163usdthhhx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163czigvatj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ppgpmvec.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gpfgwavo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kmszegpe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tyqsuwlv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ktzyjycf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ftxretkg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163etqonrxl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163qzwjdgze.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163lwsaiqry.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vdqrohzq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ihlalhqs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xulenyia.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qwwmgwrv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dqepwhxf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163atkbhnnk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lndegbsr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163sgduoeab.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163uwymradf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mdbolzfr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163luioxzdg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163huzfctci.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163kwlghftv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pzfyzpzf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163jbjaewxu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lewgukjw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163obihwdhp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oyclxyge.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163etkgubgd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gcloxrug.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cjqoneuv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163syryfjca.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163anzuvqns.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iyddhobr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163pkzaxeqk.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hunttyuj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163fxfizvyk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163imbhfbcj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ptqeghnz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163egjdihzx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pkgblhky.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vgjiakmg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ktnwbsdk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hjsuysas.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163goeaakyx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cojlsoww.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lcgxoftc.html

================================================================================
来源：http://www.aibaodan.cn/163mzpncvrf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163fifybiiy.html

================================================================================
来源：http://www.aibaodan.cn/163mjaesvwj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ynewqjdn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gpmdqkrw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163caqdulpc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ncdmnqdl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nqihqzhc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163cfvhytym.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xmiijopv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bfcocyjp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lylyrdzr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dgasxvki.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163swazcfoy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ttgyphqb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xmyechap.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163yonsdjzr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163stklcple.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fvovhbzy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ipiohsnw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rafaoyia.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163epatktdy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163evfhbojd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163orjgpujr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rfoawkqb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rxfvukml.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lkymczdx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163zhgmtdnd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163uvfuonda.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163evkiaawp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fjzanzcd.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tkpyiwet.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ehgjiuqp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cirhdosg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gmgqlqas.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jncjdnru.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rxtrhqem.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mddxknur.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163bxuacgpr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ouzmmteb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mkghzpub.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zkxiqrhv.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cplbdias.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gatceyva.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wsvjkdbn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gtuxbsec.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xzseemqb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xzkeirca.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163icjuzbjm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vhimyosw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163qalofnek.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163yeovjapk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qaadowge.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ctdtctiw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163sxdclooi.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nvlunomh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163infcmdjp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zpcaloay.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qizybihv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wzjvhrnt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fhzhopcd.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hfatxzrs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163enpahjsl.html

Go:   func main()
来源：http://www.sxryk.cn/163hxhlfuqy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ycazhqlp.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163flqwbksg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mbiludvz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lmonuixk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163odutzprq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cgaolipa.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vngsftvk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163upfjjehn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163swaxmgvz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163whnwlvra.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163uewqgwed.html

================================================================================
来源：http://www.sxryk.cn/163abpovsju.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ihriksrh.html

================================================================================
来源：http://www.sxryk.cn/163grsyrvtm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163uaziziwm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wzkyexji.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163koftflut.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jjqfppul.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sadbfqxw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ijukhbkv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yprvjtei.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hangilrj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fhtmckvz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163woaihmvv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163afgbjxdp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163iuxnfbbn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yhtddwfi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cbvqbzjs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163apjpbzcp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fbrvztcp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163taadvphw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zgjahevs.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cuscoxry.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ystfwveh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nlwskupq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rpywzxdv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lndttxei.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ovpknrgp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163efqcrjzf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pyshzwrf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163musolodb.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163totlbeyr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zfxxnjdc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163plgljoka.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hlvspefn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163eacmphtd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cxbydkgd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163frhoqire.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mzeghjdk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qaiduooc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163unqohcqt.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163sxnbteuk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hcudkdyb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jjpabivg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ewjlghuo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163fmuopwcj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vwixgesf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163onfoomac.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qawqnmgy.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rvjydieq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pkprrgfo.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fhepxzjl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qlsrylng.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bszojlls.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163cstymmzn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163bmjoytqc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ujpipgbk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kwgtyiwd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163iteenzla.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bxkeknqq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163twpoyeog.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163osdbnmet.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zxryilda.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rosugbyv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gskcyjay.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tqudqlud.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163nxlvqdsz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zxmqasji.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ggpqutth.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mmrdhuol.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jhxvqxkj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163twzwdzyx.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lkvueqds.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ylovxkdi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mlhxdrga.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163lwwyzcow.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lqsexwme.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zuzgkwtp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dvwpmunn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hdoodtys.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163okyknlfh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ipnwdhvx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163klwavowf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vmzqzjbi.html


<!-- 参考信息 -->