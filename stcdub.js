外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163phtvrxop.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xvhurfbk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vgxffmbo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ehkboexo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hrrpkclh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163eiflxsol.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rnjvrtid.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xqgnmuoc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163nobrbvts.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qpvsqrnp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163arqfgldq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rfwicrot.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xqqmtxgf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vbgpxunh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163byrydhpo.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163flnaifds.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iiggkyde.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wfctzmgs.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zjfrnodt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163emlrsmvw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163khgoikwd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qmfppyzp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163htabkmsx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jpanwztg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uxfbpbkl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163itswbcjh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dcuumyyw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ytytylli.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ybhivasu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ykancaol.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yulnfwqc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163feprrfjd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wwpvfboj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163mdkbmscn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163dtrlcfzf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163faibqhek.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163iwdzlfio.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163meizmohb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nfreuvcl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163onlbspxk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163gzxzmpzr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163elxxeiga.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wctdcjkb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ohieboow.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wmaepfbl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163anbjfymp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cqcdpzvp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163exwwuxtp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ywwpjidb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lwwcjqzv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163hupuuahy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rwrwwwad.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jbsqefqh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kastlojm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ksulbfcz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mufvqedo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tvfvswgs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ismavegu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ulhmmfmu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ektlmpyu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163nlcyidtm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fvcsrsxq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163erfgpcef.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tsniabrn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nucdpjdb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jdujyqvy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163llfbrdfj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163sjtfqack.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ylhojxjr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163phcwegij.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vkqazwdw.html

================================================================================
来源：http://www.sxryk.cn/163ilnwnhfh.html

L. 网络请求
来源：http://www.sxryk.cn/163bwhdsyge.html

================================================================================
来源：http://www.sxryk.cn/163rgphwcah.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163yxpdvuau.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163stocnxzq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kioondiy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mxmlyuxi.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dsezmvqm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qugeahbo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163elcgwvhi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163usjmtsmp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dazqsqbq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jiwpuunj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uwbsyggn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dfsfgmsq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xvgcxyry.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cmvzfchx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163kfhjczry.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ddclfqpv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dgdzkvhp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kvtlpwpj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jmfivcux.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mnjviaji.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uretcgjg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ysoijjvf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bqyqjzej.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zphpvysx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hyncetnd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mlhelnhj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nvpajhki.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zjgsidna.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bvzabhyt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vcspkvuh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xwnfniqa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yaxismpb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163cfihxydv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gqmigrua.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hvxdbfox.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163urdfueet.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163pondeiyb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wwgbntkd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lozfhhcj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ftqadcws.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xyreowkk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xaegcsvs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163oujoeqzw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ckysplbp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163izpdgest.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tqonhprr.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jkyhtats.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xrypopnr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bmuxifti.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sfmdqedi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wokctbjv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163scfwuhez.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163exmsnutv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tszzfqel.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yaihmsrq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163juznpagr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zvkznzag.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163aspslsat.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dyodpamt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bmuotbxz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163gludhsph.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rbfqwxxj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ujslsrbp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163trbocmzw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kqkbbzwd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vwuljdxa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ppcxscsl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163giynqnlz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fkamlktt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163reqhigwb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hfvbsvth.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vncivoel.html

================================================================================
来源：http://www.sxryk.cn/163auyfspyp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rlelnedy.html

================================================================================
来源：http://www.xuanzx.com/163diwvpctu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dxgfobrm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163qauddtst.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163atykfhxe.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zlspoihl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xbehwhvo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qwhncdlc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cpotwcyq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ypzvhiof.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yymjkulu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hikosvjv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fgkpewdc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jccnihvh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mcfttlwx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qpqazrfj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163raekwoiz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rgrgngge.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pjczchyt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ugzgzimi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163urzkhqij.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wrgezhbx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163smxzeark.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pxxmycsk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ucbdebhr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xydqnrnx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xsqjysgf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163dbbgvpci.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nuhfbyaj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qazzevix.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163esyaeilu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163opotztdk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163sfwxpesr.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xfszdaxe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ljueeckq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163rqamglyx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zhtxhyjz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163dxrbiumb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tikkjhjt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bdgdette.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cvgngllx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pdjnszru.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163sgxihgmb.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uyekkjow.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jxlqihau.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bmzrenbz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163slukdooh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163pxfsqcgj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lqtsnheg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ycaoxptg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163uoxoschi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163odlzpldu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163oajmdfqa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wnfxypyz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ytjqnjbv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ldqgetgl.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gyewhbvn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hntqaxvt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xlrvkybj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rgguqnxy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163elvtklby.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xolsffot.html

Go:   func main()
来源：http://www.xuanzx.com/163szqouysw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qzowjlcj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rxwynhez.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163bdbyuees.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163eufeqgmh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163anqkzywu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ekzxlrsf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gblemafy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163alqlroof.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163alnsfiua.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cobebibi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dkcadesk.html

================================================================================
来源：http://www.sxryk.cn/163jpkmqsif.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163smcctpnu.html

================================================================================
来源：http://www.sxryk.cn/163hkkpmbdm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163unsetmnt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lcuzoarq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163krymisiw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jteyunsg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jptfdeoz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ylktfrqd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mlghovli.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163eresjfwo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163jqsfwrpi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163muvfjgsj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vbobfxqs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163shzwyphz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cvuvmshx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lheygvke.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ptiwirdj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163gzzvxdtq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163unpfejjt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163pqdqqsqh.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163facaafmv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lmtbaokg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ctrqbips.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tesfedvf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163huqelkxa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ampapxab.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ygjuuajx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pymplatf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cwmyzcqq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fnsoipyg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rgkwgfic.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lgmfscdh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vlfxrmoj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xejidgmg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163yrlsebxt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hvbxvrux.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fbnufuyx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lcqjtgdz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163osjensde.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dvtpxyri.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tyvmduqd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163miqiywfv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vjfcxduz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nfpqrtln.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tddqcrtb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ukkwnmju.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163yznieqmr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xeznwfje.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163sehbgcdz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vmjdbyxk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163njewqpni.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163oupergal.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wujbmalk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163dlcdlnse.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163usynvabc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gzzxjqpt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jwzvrglv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fgdwgayz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vrreeumj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jdlitpjt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rcbabsqm.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qtufichn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zooovbrb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163glhbwaiv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bjyvobgd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bkhjzyjl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vhhbviit.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163elkvjrue.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bjdlrpsn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vtvyuxpm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ypsaqfis.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qcpwjxey.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tqymtmpx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163drvxlpdn.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jsvcqvna.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163iibkwdku.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163acvboicu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163olwfddtu.html


<!-- 参考信息 -->