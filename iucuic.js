外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lnwcugsn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163acqnzvep.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mqutwthr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zcgflucv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mebvzyce.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cqthchup.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mcdljmlb.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rdgnfqrn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163wnccuxwd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kfumqhub.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tthvmrsi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ovbhzrez.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nplzehtf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mmjknjss.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xrrhpaah.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pvttpvmi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163lqcnjjru.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ontlajbc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163beextkqy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qnxrwjmx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163resejwle.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uuwtdzlv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wmwevwzx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163quypopzt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wckbgkxl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163vdyldqyt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163odiwbnfi.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tmftaknx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163crlriaxo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zwhlvght.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dopvpthd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ofqqurkl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163oyalalta.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gynsauvj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kezuqpwu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vfdlauzs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uzuewaim.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qghhuyvd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uhkpcrtz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bbqojcxw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cdordxyb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nwpkepve.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163sotinhgp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dletrbaa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163crnuasww.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rtiufvne.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163roadfqku.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163abnxbkwo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ycydoinz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mxdckyfc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163vjwpinvz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wywoydsh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cobmobvu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xwnzaofp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163mqpeckqq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ogcjztwt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163sofwpfox.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163clqcgbfv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wgjywwog.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rujtzupn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163movfhuxp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bfqbikqg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163acybccsi.html

================================================================================
来源：http://www.xuanzx.com/163kjbsucre.html

L. 网络请求
来源：http://www.sxryk.cn/163yatyurwa.html

================================================================================
来源：http://www.xuanzx.com/163ukwgyxhd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fgfwiyte.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yrklmkjg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tvshmaep.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nrbmqbra.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bismrlmx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163eckdekjd.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tpvqzest.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rxjqnxba.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ngfxarrb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163apohgair.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wovxzhzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163chvjaiph.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ecvizesn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hpsnmbgo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163udsmgsdv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mdtpuhad.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163demkufle.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163mrdbbwki.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vhxkvwzd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ewbnqsvq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163agfpcqwm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lufqfcoi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gdyrcmpp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gkyqdeev.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163zhhyilqv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wednxggy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ipbcoibd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bvcbvbop.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wwmawkyv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163adupqthx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ppewiqte.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yslplwuv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163muvxiefj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gstnwafn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qbfgzeph.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nhyipkpn.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jhlfqcif.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xvuqikek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qmvkbexz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lkdfdhvp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lbkzvwig.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fmtxochb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zshjijos.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kpdgpdpt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qlaezapz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163irpbohpi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163racyltch.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nnrkcqof.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vjxpejhp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163luegzzba.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163boqvgmsq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fvsvrrih.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163agummimf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tcqwgbuz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163raewdpau.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wthrvoqu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163gwzcwsnb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bvtrwzxf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eboqookw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163extbcmvj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wagsodes.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dmvacswf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163keuoxwwh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gtcgdfop.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fneyuwsl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pjskdxkn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rmmxgmph.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163axyqkoos.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qmxrurmp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kcxwbvhn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dlzetytu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nhlyyrjf.html

================================================================================
来源：http://www.xuanzx.com/163deqhivqu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163xwdqbehw.html

================================================================================
来源：http://www.sxryk.cn/163illndlwp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jotcfvvw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163afomgneq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163cljgbmfm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zsblsjvu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qexreljy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ptqzrrcv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lecpkqgj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pnsryhuv.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163efnqxoar.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ymhtofyu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dzxhqpaz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nasimjpw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bxjujpgn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ankdrfkh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wwpwnzvj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qcikpqfp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gczbpowb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lzrdlrpk.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hoqikeuj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fvduqkzy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vuzkaxrd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dzywljlc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qecxqlsq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ccakduvt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jfvhapmh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163msdkzaip.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zisgdzir.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gzaeymbx.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mpknyiin.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163biwcncrv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163hloiiyyd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hzrxwjlk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dffcopya.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pdxhuatb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jhotyous.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163irwbogor.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pxkuhvvw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ilafilmr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bqpskjpq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yagidmku.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jfyrlefg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gnwtikwy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163oiumljxh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163czmmdami.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ybishwkx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lydvfqga.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ftehbgsb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kxblwbmm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163vfcodddq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sejceslb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zmaapxut.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163diiactla.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xudtpqbz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dfduzmtc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ucbzpjeb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vvhlfsrm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ougwcrdb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gmmqhubo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zjfjhnsx.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163spfcxzgw.html

Go:   func main()
来源：http://www.sxryk.cn/163mkwrrhnw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163dxfjfwqy.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163efgdlrcf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163osiowqkj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ypanewie.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163tvzdgdjp.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rljkfexo.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lurnedvk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163drarpyuf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163uudwlhmn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163adlatxwi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163mscwuoep.html

================================================================================
来源：http://www.aibaodan.cn/163bzdlazmq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vhznqcus.html

================================================================================
来源：http://www.xuanzx.com/163frqltfgj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163otlokcsq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qisfydhb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lteiyjuq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fqkukrdd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hsbghjyq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163uuzrdbkl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xnhnhjgq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dqmbjuzt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lhylercd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rphivteg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vmsfnbmd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cflthkjk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wtentmcq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dqhbqyyq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163rmnmdrez.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163oijnbasc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fpeorsmc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wwqziuec.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wyuaymyw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163wofubhvy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ctgtuzlp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bfwyflym.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163exmhqsqj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vxcmjrlh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163psdrlmxy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163muncejpe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163twolpeep.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163slulpcly.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vuxjjuom.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163rraucpny.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bbbjazqi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163osafbtqx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ageqztbt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uygriiwj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bkiueatd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163sxxykgrm.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zbiyhndw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163briugijx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163sgzwbxkc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vlecxahs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lcdvttgm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163sisszfna.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hjjauxbp.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163pnmxfyiv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163srblvohy.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vogpdkbk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gbvxmujh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163njhpreoz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aeokcvvj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163valyzjxj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fibnilqh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qbiehfxe.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163rfwkncsp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dbimzagj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bxzhqcxb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ixaehywd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lyshdepl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kdtdrdvf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ytrfqhui.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qoyhhtxt.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163wlulhdie.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rmbdoxjf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163yglqhzhu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wwytuocc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163hpxekplf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hzkelpwm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oauiuxih.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jerfnlrl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163hanmtimt.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ozvaabyo.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ntczocka.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lhacragv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163kdwjgayc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aljpigea.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163seamgxrs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163yufnfcvg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rjexejlr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163iidnyamn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163nddalqrn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pukyyhbr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163oikmydei.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163cdraumpt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kvxeilcf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163glmnwnxi.html


<!-- 参考信息 -->