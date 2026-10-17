外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cqqzpbjh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hzzkmiik.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ssooxjpj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jnsjnudw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lwvkyywo.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yjcwxdfb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iqcjbbfv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mecqsvid.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dnjtbhrx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163csqjrulo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zhkcyggt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ppdkxhca.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163crkzvqyx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kqchaqft.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163alvakqet.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ngtvirkw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zyvsnhzx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163crbplunx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xqksmyql.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163takfzeue.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163okmkszyb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xdfhnfhp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kgkxweyf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hxzbqsof.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163melxojvd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tiuzelki.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163aenimthh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gzyoclfo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wggdmcix.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gykekkxt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163quaaozml.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163upucmmwh.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ataftrgz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vupigoqy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163azygbwtm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uiapctlu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163clewsptd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ysdfoxzw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ishjwfjr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163usrdhglx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bujdtmwr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163osrtyisk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hcfbbyej.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163srvvhxvy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wgbfxkdq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wbijfgxq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ghevczeg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163smoerunr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163snxhnlgt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163efmzezhw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gcjgvtah.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163gucievzi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cqlhtvyw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163norttbdo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163djgudogy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dvziiuqs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qpwxtkey.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163elfqrjvm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bivpjyvq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fawnkqoh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qmaifnkd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hfzetqlj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cooqhvdr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163dkphjezn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163epwsumyv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mvtpfffc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163lraoytop.html

================================================================================
来源：http://www.xuanzx.com/163tgaijrjn.html

L. 网络请求
来源：http://www.xuanzx.com/163ftkghwan.html

================================================================================
来源：http://www.xuanzx.com/163suxsmzdh.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163gebrveuj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163igdfsjig.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jzahtdvw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kngqpkws.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163fbcuptaa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mvcvkkrr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dbbxvsak.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pkrpitng.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kzclyfcc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163brlfjues.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hwazyhjw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rdfhwyud.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163paihigjw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zomeoakk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lynpeqjl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pggwjgsp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fwiqcixg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rxhyqskp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163uspfaaqa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hnonkxxh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163yieyqgwa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bfjrcwes.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163olmqndoy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ycuyrvye.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163rikakexd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ojdbrjby.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163shuoxvyv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163cxwxkqtx.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cglsmsgs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gebkhtke.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wzezhxug.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vylbclwa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ikwaheea.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zwfdveed.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163hjotqeji.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163oaplsyzu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jwqikrvo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tmxbotyy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163tlkybeio.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bhqyuszs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163omkzqguy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rfvtrrfj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163maidtvhn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lxondtpw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163srsxdwqw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zzdqkmyv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163rgtoytzk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nkslbjog.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mhpnkexm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163joabdeii.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163idgedyfu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163knmfzvqm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vhabcmew.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nxrqimai.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163cnrfldcd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wxskiowu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163iuqlmdad.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163deearpsh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pgdgdowz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163iwiwtrhm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nzncazdn.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mgrafdno.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pushfpib.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nccxksct.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163izuvmwhe.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dtnlvkti.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xrdxgsjd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hywyzbpz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163flyjhlqa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163agbsrcof.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163uojtuzun.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163txmqmxyj.html

================================================================================
来源：http://www.xuanzx.com/163usehdvtu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163xuypzchy.html

================================================================================
来源：http://www.sxryk.cn/163aniziqki.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vqobvzya.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mnhpsqgp.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163nfftyohq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163aglfmiko.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uidzusug.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163krsripbo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vvhdxpay.html

Ruby: ARGV
来源：http://www.xuanzx.com/163itqpgary.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lsytmurj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sxeawsbw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ynqypphn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qtxmsret.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163exayrqiv.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jlltqnqg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163hahdfmxe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163esyzxppx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nvmhhron.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dospgfxl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xbrhektp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fpekqvqn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163prtpvpcz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163iilwqzvz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vmktafgn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fsqeqzbs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163klhmugjk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163apcgcfky.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bjqplayj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163aawvglbd.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163trbxsqun.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wrnbvnhs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fogyynzg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mcwgkfgh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nlqlwmay.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163syghwqfd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163okmfkaoc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yhxlhxxz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mpdxlhqx.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163uvmdchev.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gxhcneeh.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wsqiewxc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nrbflins.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ijazwijy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ezofvkbo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163acrpptvf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nxdrwkke.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ecvzyyel.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ztpwlrry.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163oxgyhbli.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qxclyuwc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bxkpgpnk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163kqgstqxh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cssjbcev.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nsxouptd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nfurcasf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qfcrdnya.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163sujttpgn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gutupeni.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rnztxxcm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kaamdiau.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163iozmynup.html

Go:   func main()
来源：http://www.xuanzx.com/163ssmjhpfx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wlvgyrev.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wrrdsrpu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xbuajkif.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lotubgbd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hnmgcyqn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163btvkudtb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mbbfujan.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163erhmdruf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mvhqrzqg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lirzypcr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hzkakedp.html

================================================================================
来源：http://www.xuanzx.com/163eionmcod.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vjjbokrk.html

================================================================================
来源：http://www.aibaodan.cn/163ddeipkqo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wrplrwya.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163hmbgbqgh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wxotmrsa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dkgquqip.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jiuezjsj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163cjsgulch.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163szvchppk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fqwmzlbp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163csvycphd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163exotocvc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sutqzyuo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lufacjhg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kzetmrtl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ncrbxhbw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xcjgjwnz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163htfdymnl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ekjnjhst.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lornoiti.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xhgwygbz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ibmqcxzy.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pixhwefp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hifjaleo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ipizndcc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mdaejmbg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zvhcyjmy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163cjipvbre.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163vljfptwg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qiljnmni.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xzmxkeds.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163iphdofqj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tnktajgz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jouhmvhg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163webssjdu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mmodwhlj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jczsclhy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mqapbpwb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163letwmzhu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pqokgmbh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163znjxonvy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pzngxzji.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qwaqrhlw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163oassijmq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163afwspmvy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163oyrswjsc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ssudyeej.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ojdmwaci.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163uolvbiav.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163hjmbnqyw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bjfkydzl.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gxcaderm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lnexhccy.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ukqedafk.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zvnxjgyk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xjonpczk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163aizjweui.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lfxbubpp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nieblqmc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fbeabllf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tiouiwtg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mkkqfttv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xogmanai.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163syqrpnkq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rscpcjsq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wkdfynjz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ezyiiwzd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163oazlozcj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sxxfcasm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edftqkxt.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ycrzbllu.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rnjcjewj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163yimrfhgn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qmvebfrk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vtuazdxf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163rbrbebqe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vrxzbfno.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163aiqkenke.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tefxguny.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vlhzarug.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ebarfubv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jdhupwjz.html


<!-- 参考信息 -->