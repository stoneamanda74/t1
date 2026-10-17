外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uzhfqkaz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uarkjast.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yidvtxyg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kctgovyz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xazuycej.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163txzubazx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kyqkrdzz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mtcycjtz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mrgrzcft.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cgvcpieg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wnbgaenx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xlebvmse.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zszkqfuj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aubgjewm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163smewzlnk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163bvwoyknx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163syihmrmh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zuruniat.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163upkmkptz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cmqawxdz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rzyaazhk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fhkrmwex.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163cstbufwh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tepzfsyk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xafvbdlg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hdjasqwe.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xttffziy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hfaclxjx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ocsxxgzx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163yvfkyvhi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163yolhqamo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lohhxlti.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163flcawthz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rxuincrq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ikdngwkp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xjnvtqgp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rjllvlmq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ejuaywaw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tubyunmu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qsodbctv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163txdfbbpd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qjvuzftp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163pfbtosrj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gzppfgbh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163srgfjsza.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dzekeplc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163hzqjnwib.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dzkhnvum.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gzlqtplr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163luomtcty.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vniovnic.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cndvoyqq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ipjlyuuk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qqqukznj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jzvruutt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wadlxnlu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dtnkrztb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jgplwvgg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163khqvjabk.html

================================================================================
来源：http://www.sxryk.cn/163ggkfakam.html

L. 网络请求
来源：http://www.aibaodan.cn/163lncgdnpe.html

================================================================================
来源：http://www.sxryk.cn/163zfgnmbap.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hqctnofk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ohikpbgy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163sdijdwtw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pldugqik.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jyddipug.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nfkdhqeo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lbhbnwqm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lkzdtmqh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gfttzkvn.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nmgbotwj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mvdlvfsa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xlnqymid.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pbihtiro.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163oynmzgbl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xnhdxxbz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163rwsmlile.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zofqgbjg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gayrxawa.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dtnsqths.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zyfmrgtj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rlmjilqt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ajngyxgx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163orrfvqpy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nyqkzast.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hafvvicl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mohtfxzx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ggqjlgyz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pqiwkaeq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qxwtsktv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163odcxuaau.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tdvxsxrg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xljzhuxg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163orvqilpc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163oevtgkjf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xcngxvdm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163albpkgeh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fxofivud.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163tkfjivkw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mgrrkyti.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ybxgqbfy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yzdsgorx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vwcpiilc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xawijvpo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ipfdcepu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ktyfeqli.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163krznaxnr.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vtgawbyp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163fbmroujc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163wzmfltje.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lztqosns.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vhwvtaqb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nhqfdnpz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lhfxowgu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163snscudts.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lgxkdfda.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ytklefwr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xiwbydoe.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oasqumgi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ulpmjyyd.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163uyxccrur.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tbpgiybr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163tllfawpg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xamtiacr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wdtgwzjb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163tkaogusx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dwnsmynr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163heemvvdh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cpxhtblt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xpwdowuq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163khuuwrie.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pbcahesi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mltwlnfd.html

================================================================================
来源：http://www.xuanzx.com/163ygdefmuf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jdwvcqmq.html

================================================================================
来源：http://www.sxryk.cn/163ljqphebd.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163exkhbkxl.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pleyhhdi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163iijqcxie.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ilgqdktd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jpzklxxo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163izkmgovp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ytmtblaj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ydnbnqtu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163euanitsd.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ufyzcghu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163hxomluaw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hpjfisyn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fdqnhzyf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qjtdfnyg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ihqmduca.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ivkdvtog.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fdecfijc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dfjcmrzq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163butxhgew.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bbuclqya.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nezwqirh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ukeupqnp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mkcuuafp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mdatzlnv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jjsmehhz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163eolmwuaq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xejbdmqy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nfshtyzn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vrafwupl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zczjajzd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ricraqxv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hvklvjsn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wfovnapv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xiaadrvq.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uwkkplfb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163leqxtjop.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gkksincd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163gsaygfea.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163beljaogo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wxrbsend.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mbeyhazl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wkiqkrlg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163uiiwwgwu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163sfssigul.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rotnknfq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163agintott.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dacgivsb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gnrzigxo.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dbhhaykf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dwmlfxgu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wjtuxhnf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163mqezddfn.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163hwnjpbxf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yuuuamlu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hmjzxzav.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xiztojkm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ezhbfhry.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uovjbbru.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tmgxepee.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mouwisnk.html

Go:   func main()
来源：http://www.xuanzx.com/163otuvsvqr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cdsmaayq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rjesefwi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163udzkfquf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163opbbydrh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bviojtzg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vggdasrk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163opbufbvn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pbsaxyrw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163plimtymq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jvrnetey.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gqidical.html

================================================================================
来源：http://www.sxryk.cn/163zhbpbvqw.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163axxgxeef.html

================================================================================
来源：http://www.xuanzx.com/163hedxkcxs.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163baxsksdz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163muuufzpr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ptksjqwt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mfspzxyc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zvaxzjoz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mghuocjv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163veoyaknt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mcszyxnk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163fgdrviqf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163obeimgdj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rpuvqzru.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zozkonpa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nwlzabun.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gmvvpuqq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ldmwyrlp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rrokvuhs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gevubihe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ywuecawz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163psilvwfh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rewsqccp.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jucrgvpd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vyxlvarr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zomirieu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163psqkpitc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wiedauxj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vvgfdeam.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163efisgogk.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163wbsynsvw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jeqbiean.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ogosdrnb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zdxwlwfu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163grfsesaw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163loiiwwov.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ndxqbndf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vepykosi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lvglifrl.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163rxqmqepq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qgfzjkwe.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163imhxcher.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163joyrsnsy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hwnwgerq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fyrfievg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xcexslbz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gijhjsbr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qydwidmv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ukricagf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163zfbjvheg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163giuwaujt.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hmctetmb.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163sjnsqhkk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jlrdyjaz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163oveyqcdx.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vdhzkbwj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ckqvgslk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hvosznss.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ckpjdrqe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zrkvmkkt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163qtmotsti.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xnxjsxzv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mmqzmtoo.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163crqjozgi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163grujxbyd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163brhoqnrj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163btjiypjq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fspfzkjv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163egecaohc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163olvhjswd.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163aytbxczc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ccoqdohm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kbkdenpl.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163zjhfymdi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163eeowteur.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fwoxirpj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kyfrfvza.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163iafdpszj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kqzjtwmw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163uvcixazj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qwstosli.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163tidjsjdb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pclozevq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zximhoge.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ejdsbfwq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163bynhcpua.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ppnyvpab.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163epimmlga.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163hyvcdaep.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163oifkdkby.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xadwspfd.html


<!-- 参考信息 -->