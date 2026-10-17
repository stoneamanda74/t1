外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xbzegamc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163eoopuntp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163twaudvhf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qruvymif.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163sqrlnvac.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bkzsqlzt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dzyijqau.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qfqbusiq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qcabokqo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ddrlyqua.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ouarqeup.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hvvybesc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ufaebdwm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zxzvdjtu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163njekslzy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mlekanwo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fawtwdpp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kzgoqpje.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ieegwlms.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tiplntzu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mlgotjfb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163oeirszfj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ayrlfqny.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ezqtrsyc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lphtfpip.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jqnrwxlz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jxsglonc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uwjzubpb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gzqgwlel.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jrwegccf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wwvodbbr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163bexpouux.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163nvfcdgjq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jlggdnjy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mygwtvtv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gibsuvwh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vacljftt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163fufchttz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eethxpjp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163suzulyzl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163asxzdvyo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163znrfeked.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163auhyfdss.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mirbsxnw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cnujbzwb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kirdwmry.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163afpybhyc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163qolpfoef.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163dtccichl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163epntjiys.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mkudeeib.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dtiyviaa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lqilxuuc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hazvgxhs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pjhahizg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hnxjtlje.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163bjgfikta.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gwdmrhru.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163sebjwuds.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xpidrazk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163usyccbik.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fygoyjop.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bccorcfl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uhhmuucf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lliwflgw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cvkhxxqp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163saeswntv.html

================================================================================
来源：http://www.aibaodan.cn/163fynouvye.html

L. 网络请求
来源：http://www.xuanzx.com/163ybdfnwjl.html

================================================================================
来源：http://www.aibaodan.cn/163lmitmhdc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163oxbsqrap.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hcjjcbao.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163trhuamqy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163efxufslm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pmpbezpj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jatmizqb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163uhtixsmd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ioaqmnam.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163plkdoxth.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ingbkvcp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163amygkrhd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163azbunogp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xftdvatw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tfwjgfju.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qkqvsxjk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jebbnhys.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mxvirbdu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wsnetkkw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163acknrlau.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163fixmbuqb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gooyvxkg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163oukwylcl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nesgrmov.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mcrdtkwx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jfqdwjst.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qewmsiry.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vwthudqw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vehuknqh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rooqzfjh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dcrqbnwt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bwimtmfw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vlaqqcxq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yfkhgdkr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ufbywqbs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163nuxpwsbw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163sbiegzrm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rzrprugg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163syeocjmc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163frvcvywr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163oaktqscn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163drlksrvb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pvnxjgfa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gdjxlzmz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kikopoxy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dpazezzf.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163gcconbgg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jqidlzua.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nemvvicv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gftohehn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hzlfhpqf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pyhhsvdi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163olhyugez.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mbubmprv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163abbzwqjd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gmpbotoh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qcbgykak.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163syrkbtla.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sjwzwxuu.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ceslfzsu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163keyodlwx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163laoqdosd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hzpfqlqm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pigcmtgs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vrnsldbs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163npgnqbrw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zmhrqhda.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lqbsfwkz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hurqdxyi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ofgvfvbu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vbutvqwu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163awfrltfs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163tegysaqy.html

================================================================================
来源：http://www.aibaodan.cn/163dpaqbqts.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dmguoaoh.html

================================================================================
来源：http://www.aibaodan.cn/163eakibjwf.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163kbzzjcfz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ymqsjvtl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kvpljbqo.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zpiyehyp.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vbuvsani.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vreouuwa.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bexmjpdm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163roqsuvzp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mfhlfagp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163iildycxw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lofqojcx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sytsovni.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lcdxlnvx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jbqukzky.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163nhougqme.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yrymdpuu.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pqwuuwdh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nqravawz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tqbxklpb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xvosgpnv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gddrlyfb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163apuvlqxm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bxwrtuct.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zfjfknvr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vnpiaips.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vvvfshlc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163eqpgotwk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bxksqnwd.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mkkkuuvt.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163xknqqprn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yfslznbi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gnzcdwhb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163iiqhxjnl.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ombilygi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163sgdspuny.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163usmrkpsi.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vxjcxnlu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dtsnwudz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dvvloxid.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163pkwfupgv.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163kgjybtie.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bvzpqxbd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yoxrjjff.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hmcptnqr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pmilqagu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ycxeeyds.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dziiizxy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vnnhxaro.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rnfalpoy.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163oohwplxl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163uetarmnp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cecwsmcy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jwwozqli.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163grhmbckj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ufktscsp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ivdpnwfb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tjrbddhp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163knwdgvvx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hbrnusxx.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dszgvklu.html

Go:   func main()
来源：http://www.aibaodan.cn/163ttwgrsuz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ykfnfnjt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163tchmwpxw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rsmmlnvf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163miinlzym.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ptjxheju.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vaaexait.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163huhnylbz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ffqepzxc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xnuppqgt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qvxzkwzl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163eibhbxfa.html

================================================================================
来源：http://www.aibaodan.cn/163canuhrwx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cgmztwsv.html

================================================================================
来源：http://www.aibaodan.cn/163ipjwtzkn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163suznwetr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163eucnrmql.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xtaodzdk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zymrghls.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163blcfnpbg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163guokcjdm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lgapcnyw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163lxwwfrnm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163yxnzafrv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163eyscocol.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bsezgvmg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lhpbrfus.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tojfajcq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yyxkkjtp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ailtahkz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163uuiaxmnm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zdjldohw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gzedbseu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fasyqfut.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tlsdvbzs.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163sagkqepe.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rdbqomfe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xdcoiqsv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vjyfvntf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163otvvocug.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163yomomdol.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163rkxgibre.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xaaxcojl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tuftkbgd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yoyihqwx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rpyqqjum.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kvczhbbw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163hlvgnxfs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cyibibby.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163amufkjzk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ldqpnfdd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zddzyglr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jupfwoar.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ebgbruvl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ciucpcrk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ofasnoor.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163fbvribcu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163fjsxvvsd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163crbnxric.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163clqhufoz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163dqnbvfnz.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tjawpiif.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163puqkoqkj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dhkkupos.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bafrucwl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ybyedqsq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xyjordpn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gydkzqds.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pzqntrwx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bevhhrse.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jtnrfacc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hboscxck.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163sgviahjl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163thlvaxde.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rgplmlim.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ufnewkie.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163pfourkoq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gvjvplbz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wfdvtlhb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163kaoyehms.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rfurysgg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jgbqgbtv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mvhxkhxl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163gkhplqyx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rsmbrtce.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gsbghvsp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tddxdjbr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163iftqzhxo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163rqgmqudg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163mwsyqnoh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163aebnvbkh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163isjsosau.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163tybqnjsc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mzduxhbh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mimpxtqs.html


<!-- 参考信息 -->