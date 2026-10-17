外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ciiarelj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163elrmmggj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xvffybdr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dbugekoe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qyotfhiq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fnndmjaw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nwlufsbd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hynqsrsa.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hqlotppa.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163efutdtfu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ekijuypy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nvqumorr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dtlziqlt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tzbpvwhq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kqbmxquf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qifpaqeg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zucdzeuy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163umxnuate.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163clmaqpfu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hbfbwnsh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nxibtlzw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163luctnkaj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zsaskgpc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163znvlibfd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163sitzrwcb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xcjcshsl.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163stbrhhqb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163avwdfhfe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zwmkhdct.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tgwseooi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lphlokze.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163untctkrp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yybycyyf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163efywftfq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kptsqqtq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163cgncgjnh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wwespbed.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ugjgagef.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hdmjcvrp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163etkxfmyg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zhsqgnkr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ahutmxxj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163hjhoqcga.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wgxljsys.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kfkzqwdx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ozjrquik.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qdgvtgyx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vlcatexg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eoauqihr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hxwjmnre.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lpfjsrlh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wupznfbu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163myejpyua.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163avzmyjnl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tdxlppfz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163usguynqm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163btazcodz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fugkqytx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qirwxuep.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pfkaochn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cwgolwwz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ktymfgbn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wbffkllc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pamsjkzm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vyoskphz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163djbxbfuv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fnhraxit.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163potpwjqq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qhnfkblt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163sjtsaewm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qhjdspoo.html

================================================================================
来源：http://www.xuanzx.com/163oibdwefe.html

L. 网络请求
来源：http://www.sxryk.cn/163oliogkpe.html

================================================================================
来源：http://www.aibaodan.cn/163wngezqne.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sbynovsh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mtjxwhpl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163lpvsptrn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163hstwpgdo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uuanmzvv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vxdkludy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tjinyfji.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163npmpzark.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163cgdvibek.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163nqhsdrau.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lolhuynb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mubgnehh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gjktglky.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163huesdnkv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163asqwnvov.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163melwlyuw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163edgvfubs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ewvrmiue.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163abbzeglm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163henycpye.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ucdhivub.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163grhawzzt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bxscdzxx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qtuqqiwq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hsxtvepe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ojsvfvre.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zxrwzefk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163dbpumlsg.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hczvadvu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163umkvayeh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nzhbdosy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bbfbfmkv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hfjqsoxc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kbmmtqse.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xardxkig.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qwuqfcng.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vhpharhg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163cwythykd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ugxauicc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zxawggbc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lgjvaupg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163dbjmulgt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zllmsvrw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bstoltmb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163eyvqqsfb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163bgfrzhzu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qrqcdfmd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xigfyeep.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163elyyraje.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gjfehgpg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zzrbeowz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163raqqjzri.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mjzwquxm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ivzxcweb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163doxcwpog.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163amsyhjgy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163osqktlux.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tuqisxud.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sozloejy.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bobvlmgx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ibmncznm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nokcxpnq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qnuufvhg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gagwsetc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ckvucrur.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vavthyrq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163unmfmfbo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uculwlcc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163clawlpiy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vqnywrle.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dojsbtub.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pqiljykl.html

================================================================================
来源：http://www.sxryk.cn/163couyxait.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nxbksxfe.html

================================================================================
来源：http://www.sxryk.cn/163vjqgwehp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163payviezd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163kkwgosxw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zglfuwmj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gecvzekk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jdngberv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163nhfoiikn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jkpohmso.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xdtncdrk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163artnctjb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163diqeorks.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hxkfecam.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wsdevnez.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tmnwxpab.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ctqfbcsr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xtoabbjl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mqdoxmzd.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163prbppgxm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163janemkkd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rqgnnptu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eavqlvuh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xalqjyqe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163apsmtete.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163klcmvhku.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vutemmok.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qtharqim.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jyhajctv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163irdiedyz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163utsshnni.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hyyxolvw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jmdrpvkx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gwgxbbup.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pppnenom.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dhkeaykt.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xghvzbcj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163kbupjtpv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ycyxexoq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qoicfbti.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mdojugfg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kltuaqjt.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tkjuoitd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rjzrtlqa.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gjcykjsh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kbutvnwk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tyjagyfd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163osibkndb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qfcjaurh.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163riygkkbv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vibwotws.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163bgmdzwfq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hepnusfk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163eqgmzipl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uvkeshwl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163grcqtxrm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wcomxepa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163awzfjmww.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163bbcukxik.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mklmbzcf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163edjmpjoj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ewzjznyb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qsiyvwbd.html

Go:   func main()
来源：http://www.aibaodan.cn/163wfilpwij.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qyfqjwaz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163sjwwnbha.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163pjbyoocp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vmzvxrzf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qtrtoylu.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163meaioyry.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pfbeaelv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163umbzvgnp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jtrijdfz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163txrtfbhs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163uhdykyjf.html

================================================================================
来源：http://www.sxryk.cn/163rrffspnp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vnztfeta.html

================================================================================
来源：http://www.xuanzx.com/163ptwvvvwa.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rqlgveqm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ahymedbh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rnqlipih.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qcsyzoud.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163clqqcejp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xoontazm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cybucrki.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rhfviuwa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lujcggbk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163aflfidzs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wpoivmkt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nqcthvqz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163grzxfzow.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hotuqyrt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gtameqds.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uytadtue.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xgaqlcgq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qgqtawfr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wmzznwnx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163yaodkfrg.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163lgyckmci.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mcsenonz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yozkgmkf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jcvcimsn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xqalhgii.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fbawutcz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nmpwppev.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163agzvbqni.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vllngukx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zrtflzne.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163urdbomyp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kbwzcxiz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qixbeypu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163matglpoq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rfuujzdj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163kmhqsqki.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163giicgpav.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163nvtmgjmu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163spxwrtvo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wvtqquxi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hzcrtogf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163xtkvoebn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wtpkkwth.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cvyykxcl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163gjzksjkx.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xfosvucl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163egqxersk.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fzygdmdm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163docyvlfv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hdwqtatn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lbduqnki.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mzydtnjt.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kckowiqc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lvbwrvih.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rofcppib.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vdhnyloy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163twahwvcq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ylbamylx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163civgjesr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fmaubyfz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ywsfblyl.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fwjirvzg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163itjljvny.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mptzqxdw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163voqfbkxa.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ainhyipn.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uibqymqk.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qyljyiho.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163lgfjwfxc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cttjmylb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163cphkhpmt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jtxsteiy.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qfvklodg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163lnjhicqe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dmrjvrmn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jtipzymp.html


<!-- 参考信息 -->