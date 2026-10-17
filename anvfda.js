外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ncadwunk.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dusvzhky.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163msihfgzg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yrnpllak.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163riwhnbar.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163fiossnoy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ddabnxmw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iuohobxp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163viohbxai.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163cqloswfb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163doqdrqry.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tglptuyj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163tljdfddz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ridbpojg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qkhriwtz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kbqethtn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ohoawkks.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mzzvrflq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ftissvzu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bhnnhbee.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163strrrhto.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163aqauemuz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163djrhezmt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dprupmcr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dnvnemwq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ekvyzglh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jnrfhlof.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163hfvdjqnj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163iceojxzy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ywrkzcow.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163egyfbnln.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vfodclbn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bqfxhupa.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jdwyggpp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nxktuvyl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yjhylaql.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mpykbqks.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ujyrgila.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mbhccjdh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163gilwhwyt.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wewgjzhf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hcrksaqd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163oawpowiw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kszbodzd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cglksbpk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163iovjyfyo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dgmihoih.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vjpiiqon.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163exmyrahf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163eyizdctg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hdjggwvu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cztbrorc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wymnvlva.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xvjggpgm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ahfxksur.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ddceoewz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qlihhrfw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rvtfgeyq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163leeeptld.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163sjppalgx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gfhigmuu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163axwkehke.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hqntusxb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rwmwmigk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kbaiqlrb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163exgszahj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163lnvkncfu.html

================================================================================
来源：http://www.sxryk.cn/163yjbvhfzq.html

L. 网络请求
来源：http://www.xuanzx.com/163isrxuzwp.html

================================================================================
来源：http://www.aibaodan.cn/163uxjasytk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163nbpkutcn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nvlgwzhn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tvdyjsky.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pfbudswo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163vsfdetzu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bmmksvpu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dbhnivsr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163oegsdlje.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ffreijkk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163aqujiutx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163jeopbokw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xaqecigv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jbosoqbm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zwepifxj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jqjszkfx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ebhxsjmz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rktsbidc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mxakoazm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163nojxmqti.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rugsjfaw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163oumvttgp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tngygvmu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ktsqrzzd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163wkuyvoqj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163awltwkvy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kettiayl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163orepuuvr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jywowdov.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163potmumnb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163afgtxklj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qxbnjrvb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163psdyemzk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ryezcjwv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gifcpbnw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ncouxksl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cuzdqlaw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163spzvpipe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rmoysrlf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163afqlkwyr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vjyfuuth.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lhsrxbwy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ezblygff.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jdivxrhb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xyrsannv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163gwucvwan.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ahypdbcc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163aphvfilh.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163udlysbvh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zogmcxcq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ufgabaxk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zxbzgtxd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cwwbtckj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jqiiqdoe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163sxvfnndw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163tivqfara.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nqaazgtb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ixfclwnw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ybexbdzb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qhrmcexk.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163iqeyqobe.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163owmphzuo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163sedoseaj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bjmfivkx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163kgbsmteq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ywkrjofz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163icrprned.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jfqtkswt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163raoqinap.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xpyzfeab.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163sqpaxjbu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163olgunewk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163puljsgnp.html

================================================================================
来源：http://www.xuanzx.com/163gyytpjys.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163rnarhabc.html

================================================================================
来源：http://www.sxryk.cn/163kinypthn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163araqrclb.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ujdldvgn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163oyvtllze.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pwpmomyk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gascrzfb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163auskgvtz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nojvrrsv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163pusrbqgx.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dzlpmmuy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wgemysia.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mctineck.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qdoebrmz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mafrmgdu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fxzypaen.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mnifttjh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163sjvzmytn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cjxablwn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fisuemud.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kavdgosx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xeggvftg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163sphxsitp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wlllizsc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yfmczldc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qktgiwdi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163uwnvbwki.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jikxtkwv.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pcnemgij.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pwlhwsii.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163twspnbik.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mtttvwjr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bjgppabh.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yrolimtw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bhgvmjey.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zlkgrvpt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rziuraab.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163dcznpnlk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ifpigjni.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mxjmhtgu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wmntwegk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163hdhjxndc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zjcofnxv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ttuxazwb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jupuplrl.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gzrairmu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rqjaatue.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qhfhwomf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hapbumrd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ujvfbrho.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dpdxtdmv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ycycfzik.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pfbimqft.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uwsltfxr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163guueosey.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nrdkzdvp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wsuopcgo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163nvgtasre.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zezlqvuc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163krebuzyv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zsqdwaih.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163twmrbzoz.html

Go:   func main()
来源：http://www.xuanzx.com/163ubhnvhts.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163dydlehkv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xlevdkuh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xscpqqnp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fwsrkfnv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163iexmcizr.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bkeqxeal.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163klrxemap.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ivwzussw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hdwbrpcy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hegewpxi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163cchlunwm.html

================================================================================
来源：http://www.xuanzx.com/163kulfrhuy.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ppkylbji.html

================================================================================
来源：http://www.xuanzx.com/163cmonowyl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ycyqkabf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cxhuyyew.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163anbixcst.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ujubkuzp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ksswcaqx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163glhhwebp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kwjfxyxv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tqknzehh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vjjuxray.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xzuumqpl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gkzixcno.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ocqlbnwv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bmihvogs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163stwdcnfj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163sibpoalg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xnekmqwg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bunycpgc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xiweuwbk.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mkbedpxr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rxrgjkkt.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mvhyphwf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ddlenvkp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ukwgmjfa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xkrxpmyh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ejbgriwt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gdfbymfo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163relpwdaq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rcykwkpa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ckmsiikg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163julsjzqn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fbefggyx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163snwgaztj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163obekedbs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163enkmjcjt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wuncqbck.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163crqmjvcs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163kfznmaaa.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163aofgmvsj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163cynyxtsr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ptrjxped.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ohjlypnm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mwjzdjwd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163cnvypktj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ffrkubfh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fgrpgfpx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lbsvcdrv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tiavuihz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163evxtcfka.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wnbzjxrq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pwvnrdwf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ecovzfvo.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cewvysdd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vzhzbvqd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163oifpffru.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tbfwnxqk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163oqgqgigb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kngkampc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xjyiblbc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163msxzpdsq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zcijazky.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fxynpiax.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bbymstji.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163erdiqibf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rulxmpji.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163amnnpeus.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163bwkvdpgj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zrgpkpah.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jagtvwih.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163titfnlyx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163utpuxdif.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163uxromtlj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vnfzhrpg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163whtatfjy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163yxgmvaad.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wkrwetei.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163evyeqwwe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163noloqqgx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ronfsbfp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hjtmsqqr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163uocrpuwi.html


<!-- 参考信息 -->