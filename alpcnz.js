外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163utcusrhw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ajybxtoe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163oukyornk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163aevkgqpa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163przdbgry.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163azlrrmkm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163swvjktog.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nxdldydb.html

================================================================================
来源：http://www.sxryk.cn/163hbkbozkz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163uohjtluv.html

================================================================================
来源：http://www.aibaodan.cn/163kvhpkrbw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163uzbtphmg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eduhpmsq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163imdjpcrr.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ujsyfljz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ccshlqfu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fgahpxea.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163oftphfqy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hxiomaid.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dgugnekb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vwxiymjz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163fmqluxbs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zrbyjrqq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kjngxtcx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mtlpwvph.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rgmgbjxp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jjedbjju.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163igvukfln.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fmmxfqtx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163inpvuitd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mwiugibz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hvecltcq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qxglmogs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yqoodjlq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163funzuuuf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jwikgieq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163betljhca.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163psprosow.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163iygrabdl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163imvoxyla.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163qmfwdeft.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cntojxiq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nwzxklum.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wyfunjzh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fblpknmp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hplmnyfg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mdyyztwm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163anjdekpa.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xvffcjvk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163omawbwhg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ozrhaahv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jhayqloe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zoinyqqt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zmntudym.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163sbeeqovc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qnfowtih.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jvwgbaqn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163myqkztfi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163obshbqgz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hvknspsg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pkujbkbf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fmdwzjna.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vtwhikgn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ohzplfih.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163afanjsqw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kgwnzgtn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qhrreqhj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mtbeyqug.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xgbjqvoi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jjdwvjih.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lxanheqn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qwzhbkex.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lbbneief.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ymljulvy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163cwujrlti.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hsczgorw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163pisglshs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ubhgiuup.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lnfpnqks.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fdjwbhxt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bauunfji.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ruemujkt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nwoccxzs.html

================================================================================
来源：http://www.sxryk.cn/163mifcxvhb.html

L. 网络请求
来源：http://www.sxryk.cn/163yfqwjnqz.html

================================================================================
来源：http://www.aibaodan.cn/163ednactlz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163duzjhtjz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fiqisczw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qfyowixb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nkknvcjp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mmtxfmsb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ndblxfgi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rqmxkcjl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vvwquhtv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cffdhnqw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163goyhfnek.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zsrqwxfw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ddyutrbw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163tjvcncss.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kfmtxkpa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yscrsfya.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ljfzplmo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163esnirlcz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rtjybfhh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ccptbrsu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163enbpqzcy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ylkjwyxl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rtgkzctf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qfeducth.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ckpqgvzi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bmyjxnea.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hcfbncsr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bbzbywwl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cpwtvmad.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tgvceyds.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jpfbkoyt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uafrtnui.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mwlbrmbp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163riqasxdi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kivzscmb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vxqjrlvf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163quwrxmtr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163iyhirdkb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163lmwiugik.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jicrdkeq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xrbflcax.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163njbyjlpr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163iqjtypwc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xnychxlz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ioeurorg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tmlsfcbl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jsuvopdf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163eetzksfo.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fsbyrwuf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rnhgrmiq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gcphmpdm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tvnhcvzt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wmeelido.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ttkozaib.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wgpznwxe.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dmumtkmd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163intypywi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dhobwson.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163btpvqztx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163obasaaxe.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rcvdbqds.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163eduztqms.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163erfsrifz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163txhfrcpx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cjmhnalp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kzzdaxdp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dssygvze.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rfnmghry.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vyefukrm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dzmihvzq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163sbiclcat.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gbiolmkb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lusgzkjz.html

================================================================================
来源：http://www.sxryk.cn/163jtjgjelb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gekmjdnq.html

================================================================================
来源：http://www.xuanzx.com/163atemokwh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vlnjhlyp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vzcnuoxx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mfxxyabg.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kcpoxcxe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163shwgpfpy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163iwuwcnmp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163msfdyada.html

Ruby: ARGV
来源：http://www.xuanzx.com/163gfzyheln.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mipavoyf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163knpbsaew.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hhudoaox.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tmxunauj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fuwpxjbh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ornzmzlf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ggkarluk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xxggzkjf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vgnzxtnx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163esqbmnsx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gbdfhess.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163rycozjae.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ohortaoi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ctymawjx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ocuqiwuo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hnueromu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ssexvcpt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pnwssltv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dxkcorii.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163dkoaphfw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xrxuvoqm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mmpkpsoo.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wuwtqjir.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ahplykns.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nsnbpiyl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163buodpkhf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163igoplkhk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163oezcmafo.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163buaphlop.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tjnpvmmu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163pkyvqbag.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163kgomdpma.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hkxjksyq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vzibxpyj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qjkfuoki.html

Ruby: exit 1
来源：http://www.sxryk.cn/163smwjaokc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zzznudsn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xeymcbrj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163svfayzdo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163sayqwool.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163knvjgoab.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163yzzeiual.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vidtzqhg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mjwqsmzd.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163badicuxf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163opmczahf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vlazilqc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mwtegobv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163emarsnas.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ubtpsahq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wimfuluq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163sikwiwdg.html

Go:   func main()
来源：http://www.xuanzx.com/163lfcfdssr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jwgzwsja.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fgkmojkc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163peandubq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zxyipqsw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163djlghxoj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tomhhqzg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gguqftlo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xxjcqapt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ptxchfdp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163iubjhfsx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163tqybcbuh.html

================================================================================
来源：http://www.aibaodan.cn/163zyqoprbc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163zsntfoag.html

================================================================================
来源：http://www.aibaodan.cn/163auodxbae.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hntxeauw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ljqdxkki.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wgxuwovd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tvypzfgd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ofnbpjpe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163srjmtvqn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163nglzcbsh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zradnzpi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jthcqkga.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163gpebqypp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gxqaulhi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rolespko.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fofzhgwr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163klaawbdy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wpgeoxhs.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163cijwgzqd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bugtjuoq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ggyissxi.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vynuyxas.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163slwaecku.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wzavnovh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bogrcsab.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jbnegunf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bwpiuoox.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jmnqjfwf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wisqgczm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ulyhmxfn.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163omlgmgum.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wayoktfe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163uwrlzjcz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163btxwylol.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163painrdbe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163koxbjskj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163givjzyul.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gkisqubb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163cuqefmtj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gjzgnilk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bcpdrsav.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qeiieprn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xiztzyrn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163toagipxt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163pzgjnkpq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163abgjmtsu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wddotboz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qiiewwtn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163pzadphea.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163gafxreib.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163bobgfnqa.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ekkamojx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hcdydbiz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ozjsjtsw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nnmlaepp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zwpdicvy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dzudsszr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lyjioufi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163eanhtcur.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163hwamzvav.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163znauzjay.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vumvykfx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jeetlejz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163bypgnrcp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bsxesoji.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163edusbsel.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163iypkdorb.html


<!-- 参考信息 -->