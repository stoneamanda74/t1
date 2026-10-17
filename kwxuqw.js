外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163npqvelkq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163uehjgush.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zdhfkrth.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163umeokhlu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163aqfnprmy.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163udsympoy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163atolxgke.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iwnhayii.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bmireisu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fxjgpzkf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lhxextbe.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163eujudcwu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uitxnedq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163opuivceb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163fjnncsdj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pzatgnga.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rdrecyku.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jqqauzkv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vrkrytfo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163knbpuzxi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zlslmwsg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163suebzfsr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vbyekbvb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fjzomhie.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163beqrmkrv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sblvbiro.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163onwoywzk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gqyscaxl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cwibdwfy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jxhrykqo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hgalkvkr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wnufvqkq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dpltsfag.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pvptpwvg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jnqnbrui.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163luupfdqz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163pcwdimal.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163paynthtm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qhpvmplb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kvzwgncq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gqdtlkws.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163cvqinoph.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163slgopvad.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dpxpqgyd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yyuootdd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hvycpaql.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163imohegis.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kexnvdxy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rfzhxvzf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wnrpvetu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dcxtnljf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163elmfghdz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163judoyvpb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163igxxgfqn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pxgrbuyd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gdmzktyx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qztnehcv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tjutlfvt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vdsazyre.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163esvjgtfv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163txruoetk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tqnjcnox.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tdwzfjrj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tubmnkgd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qdpatyki.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tybiruvq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163eiavkmku.html

================================================================================
来源：http://www.aibaodan.cn/163sgechmor.html

L. 网络请求
来源：http://www.xuanzx.com/163ccpavkzf.html

================================================================================
来源：http://www.xuanzx.com/163gngfxmeo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vewtfqar.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ezacaymj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gqgadrjj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fnofwcrl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jdvpczzx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163unqroncg.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jitejaxn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163obvdkbpw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qlfzbfde.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mybcofho.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kmkrrvrp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163imecurlj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ifybvgyf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lxfifdjy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gkwztpzi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hekjywnt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vybwstzr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hbvtzzve.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163klzvzwbs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zmwqatke.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163stxgogty.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163usymhorp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lhppivhu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163wctptswi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163pgvrvaim.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163iifpcpbo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163obzhfwtc.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wbmgxunf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xxjcnnmd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tinervse.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ttxalslo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qtocjgmv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wzrnwtwm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163asnjxfwd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wcfdueuk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163yiywbkzg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zmvkrryd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hxqwjvcy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vvujwgps.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jifiojgm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ocdrbjdi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163toywuwzr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163fvqhbwbe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jdoprdkc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163asfagjvy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163njnstpdp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163golxdyvg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163iignlslb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zulyboiz.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lpopuybu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mxjxpqyn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163abgreehq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vqkyrlhd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tqxzlevg.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163oozqzlcx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ybxghojl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xmyptdmz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163konxhapx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163injktzlk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vvgxdanh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qqwukjix.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fxhlujvb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hzlkdvio.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bvkdtzmd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xfjxlzbi.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jblkjdob.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163muzsvxtc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xaadpjsq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ucciwmqu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vyeozvov.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163fyetdlij.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gsrlaocu.html

================================================================================
来源：http://www.sxryk.cn/163lrfbnyhq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gaofevxx.html

================================================================================
来源：http://www.sxryk.cn/163rlkhpppx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163stmasmlh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kisnkflo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kfgerxbz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rlpvluxd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zqoukecp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163akuqomso.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zgfkbajs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163egjohekz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nirthyrj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wzznmtck.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qlbjhvrl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163isnautyc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bekmdxcb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dhcvczvq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jkibewge.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163errvnlcy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gbmxkqfp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hhgnpcih.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fjexmmbz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hdylabqa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163yeskgkfs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163notucxqy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ehmiabtt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163kfdzjilc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hjymbcib.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xchogwtr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163okdntztr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qbejpqmx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163uggouzvw.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163oudjpgnf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qoqmxgik.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163oldusdgc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pwntgzaf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163thlecpfb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163covhgvhg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jtitrrzb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vjffwdyd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rsonwnux.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163idbrecsi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zsyqgcve.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xckokqzp.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bixdprii.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hivfbdwc.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ousqbudv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rlvebbfi.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163cminxhib.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hoklpzho.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hgvcvthm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dizwtudl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163aygkaqxe.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qpkfnnzk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163amutbblv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163skrlrrpo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nhybbzku.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ndmpvcsy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163pfyxphii.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gvgrwcnx.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yakchaee.html

TS:   require.main === module
来源：http://www.sxryk.cn/163adroklwb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163iihylsag.html

Go:   func main()
来源：http://www.sxryk.cn/163vcactlms.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kllbjszc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mxptyoxi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163krlzeeui.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ihlllviz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163phnolubc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pvfdjzlt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163atgnynax.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163oeyskbpr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163veahbpan.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vpjdjikt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163piwccxdk.html

================================================================================
来源：http://www.sxryk.cn/163luejldmb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163avqxcqcf.html

================================================================================
来源：http://www.aibaodan.cn/163wpxmypks.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ekovyqau.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163szugcuwf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ehllnllf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163alvmkbnm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qddnmgsc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xgqvihnd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163nuxzuygj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163auzuuhhe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163moinpcqj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lwmtakyq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hxnyxvnz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kvbmvyzh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kwoutxni.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bjfygbqe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dfgspulw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jkfxtong.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sfndxriq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xeitilvo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163sruocusd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163pumahbrw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pzgxvglb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rlvtgttb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zvmdmylg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rullliot.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ujeeveny.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hpboccrz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vxcnykhw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163zcysghqm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tqaencnv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163flkvotop.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vazpkuml.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wdidzqwu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163doltbcon.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xzjalqix.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163blvavgnu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163gobyicdj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gfqxqwqe.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163cjgzyzec.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zitmyoym.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dryiwohe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cxfbnxfc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gpwersnr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fxufknfy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vobrihnb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ocnhytau.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zhejkyvg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163drnnzhbw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rvrvatrs.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163icpnzrso.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oceynfpr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vwsoocwa.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163echicduy.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ajdpjehi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hbnjpumj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ositdncv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163icwmgwcn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163grosurer.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163isdbsxvp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163dlpntkhg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cmagwost.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163aaexfdud.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163zochydtk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wkenwimg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ozodohyb.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163axfowapd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eqmuzyyh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163agvqzrea.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zdlnxchf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163epokixbo.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yxbmqbnx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ixjymefw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163awxpiufi.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lujkcote.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vvoorzqv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163borkujfn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zqubkwvy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bbowniwo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163nvjxpbdc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fflwguce.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163fbskglbr.html


<!-- 参考信息 -->