外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rmcuywfu.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163puggsxud.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ehqbdtlo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ouzouqbm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hmtulodp.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nnmwfixr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hpbcisdg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dpcfqqxv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163scutlarb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mzlhowdb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xczzolip.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cvzpruqv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163wruxzvin.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dbuvvxbe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nwagqwcx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kvcqhcnk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163epikvzvm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vkopkwpn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wmmazmqa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163prwwalni.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ydvewdmo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tdwcphed.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bcsnqowe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yvxtdsez.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ywcequjj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ywglowlo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yxyqdzju.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163owggurey.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ujkrdwvi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xgkeideh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cmnqbure.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jpufkzbi.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ucccweap.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vnmmnlkf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yaqmfcro.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zacluuji.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163blhywjqp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163phwplbid.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163uuhrbpuv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dtfsawno.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163muxzvxlw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fvhzennx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uhhmaszu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mygzrbhe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163molzsowp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jzgccxky.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jukceyya.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pfryfkqj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ledhpdjf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qaoorbaz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163iudgbupj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nnqmnjbx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vrbkibin.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zupyzaax.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jsjthijo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gyzrvbpg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xxjyeyvy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dckfsvpb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wlpoyvxf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lbqqhqtb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wscjztzq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xibuyrzr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163edkvdckh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mlpnnlcc.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163togglljs.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tqjgnyrv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ethfviaq.html

================================================================================
来源：http://www.sxryk.cn/163wlgeqrhx.html

L. 网络请求
来源：http://www.sxryk.cn/163enswlarg.html

================================================================================
来源：http://www.xuanzx.com/163btxbrdlw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jzovezxv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oztlbnqs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163josuluqy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yexotvra.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pwpirkvz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hyouejkz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163bohkgjmu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lszbauea.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jzvfgdgl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ljnsezgf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ynlvzpdb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163opfjwzjn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jyqasyxn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tybxpcul.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163iavigumf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163wbmiuobs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163llxinctu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lyirpaxu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163iacqccnh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tmygjdhi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wlymvfoi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xthxnepq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fnkmnbgc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163suafgynr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ozdmtlmg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tzoekzwj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vrddzoad.html

[L04] 设置超时
来源：http://www.xuanzx.com/163flrickkz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bwtgwlwt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163muqylatu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163iwwylpej.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dyluyped.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163jwcjaeha.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hskfqpsr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mggagtys.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163bfrdxzkx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qhsaglwq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mcvxspag.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163klgwlrme.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vpvwijzz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kkuvatap.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dvzqxivp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163nsunegkl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tbqzkodi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163eegcdxrx.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163crrsyspz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pdekxjkf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jjnaaogw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jeekdjrk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163acnyvspb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pipccgjj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163puxtxokp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xxrpntvh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ngnlxcwv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zpfihzgr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163uxescdic.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163acjatads.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wzudpcgu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wvzicull.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vurbrimv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163aqoamtni.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dcgxochx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163cutwzqde.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163yraktyax.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fvphawan.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163talkllad.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hnypczbq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163judrxnps.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bckvgxls.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qctaljrt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dlyuzrmj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wepppzda.html

================================================================================
来源：http://www.sxryk.cn/163glahomqk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cqkesnrf.html

================================================================================
来源：http://www.xuanzx.com/163lilkmxpd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163glpsqvkm.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bdozjwqw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kdbqumze.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fmfpefja.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fjaxwgep.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qgbdjzbc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163iudnpdwq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163shurmdmn.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xztcpptm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163twjsdccr.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fyrkxwvs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fszthuzl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rzeymvzc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163olgygyjy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gqbevpkb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yxqarbwp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163aaofrgxb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qdunkbrh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dyflxxko.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pvjkxeli.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hjezkknb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bjnqxjid.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163urlmcras.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wciodbby.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bovouovm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mtmqrtbz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163jaruuvkg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fobnsegz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163uziobnxk.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bxsniiwg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lbsptjpq.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zguecwye.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rfkbphbk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ywupkejp.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mxcjawmw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163aguixbqu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jgelkmtb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fagjnnba.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163aqojonxx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zhfvaoub.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zseutrfq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zjyjsmiv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ykqzvjrm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163rgjpacot.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vbdoaaxk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wmqsqydg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ewntnsjg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163cchxnhwo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ivkctoxt.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zjebkpuk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gadelwoa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lbikienw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xbxvihvb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jinmsxfm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dvdvtlhe.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cglzqinp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163goxbrxnc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cgvbijzk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163attidass.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163bdgcwhco.html

Go:   func main()
来源：http://www.aibaodan.cn/163baozinqb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vqjpwtom.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ophenyqb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zyfegorf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zlzfcizw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163cnshsike.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163aorhfoei.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kvbprvrr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163epfzwahm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163omowsmhn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kfsohcqp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163cnzosfaw.html

================================================================================
来源：http://www.sxryk.cn/163kuqkcgdq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163anzxslvo.html

================================================================================
来源：http://www.sxryk.cn/163nvatrrmj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uozuftty.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163fbfoegyr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rgfakmwl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uoftrjtg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163toosjwsz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fwgpoegm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tjjixqsk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vqlohbmc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163uneloziq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qowilogr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mzhuacxh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yfuccfaw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sonfjjwp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ziargdyu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pvyhmlcr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nlcluump.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kbbeswej.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dosovedx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kqemoxdj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163krxplang.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wxtoapav.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kxpnachw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wffkazhi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ewnjcmlu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kvdqdeaz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mwreokdm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jmjujcva.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bcjelhmj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gannjnyy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nlidvraw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wlhnjdoi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gmhwybfd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163eovzeitv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jtttazky.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fmhnbaex.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163grjafdqj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qbpowwke.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163flhnvhlp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vrayiydt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dpnrgrkc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dxswwkyd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qapuprht.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fgnqwidl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fhraccti.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163pcizxhbt.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163dkmdnabo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163klxjlrbl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ovnhujmb.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163difugjyv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bpakqyfp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163kpsdvpcp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163phkfntmz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mejqrkdx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gczxedyq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lxaezkvp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163axplqgni.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ykaupmyf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dvcgqbep.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kopwtstg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163drifcnnx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163byjrlaqo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163hxskhjni.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lmytamop.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163nxtljefy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rhaxrcmm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kcprepgi.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ewsmzfzs.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qifojolq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wdgeager.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mfiiyxly.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163koqlufki.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ozgzgvxw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xzyzghco.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163syllipkm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zvktdwcw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163cmwqjwid.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wrnzbqys.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bgydcarg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kaaorgst.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bnnwohoo.html


<!-- 参考信息 -->