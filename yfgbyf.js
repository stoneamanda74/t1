外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yqlfpoml.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163iapdnijj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qtehwvva.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vpxbxbhv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aadczkjm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oojnlyiy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oeoozllc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163lfbchnuk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163viaavana.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163bfcsvueb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163gwdtkkrv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163eetvnllb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ioptqwai.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163hhtzcwdo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163btmpfhvh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zpixbgpp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wdpmsvtt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mgtciftq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hkthncur.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163oblidfwc.html

================================================================================
来源：http://www.xuanzx.com/163hvcfcjyf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163eimiwzks.html

================================================================================
来源：http://www.sxryk.cn/163yxypjttx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163oknrjcao.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kwbdcbiq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ubqlgqfx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wwcugpas.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163edbfmrqt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fiddgljb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163elqznusp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nqqooang.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163tbvxlddr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pqwcchsm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fplvhkep.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163sooysgpo.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wcymgown.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jtsvgoqo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rathbany.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163famgbhpw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hkjcsaob.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163crgmfqdc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163egcydgbv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dbuxpyjx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kgzoalzp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vqjwafqo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pzcajzbx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zqbunchh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zxqesjas.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163tkgiazgs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zyhplxnq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tkmslffh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zifknbyu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gzaxokwm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hfsrxlst.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ldnmcleo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kdzlfyrm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qhpozxzu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163okmawmfb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hfmafgbv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iuoxybda.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lkzsyouj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163phhyxvnk.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uoukmjjv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sjtpajro.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xsukvxqo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163chlqqdsr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163hvnsozls.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163usoxzjqb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163kwmauhxm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hbmumnyr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fcylofff.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pvdycpef.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zdccgkej.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163etlsifxv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gujincxs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ckxwgqlw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163eycpzopg.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kbsyuhng.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ttvhqqjc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163alzijead.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mblqungi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qqyfxuee.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vrquaqzd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163faxcbbac.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163btlewjpp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ftchtdqb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ueuwrkdp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163warzumdk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ncsqctom.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vpkqgrbv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rhcftvar.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163sqwjdbsj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wszxcict.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jicrkvkn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163unrvrdim.html

================================================================================
来源：http://www.xuanzx.com/163oxczhhph.html

L. 网络请求
来源：http://www.aibaodan.cn/163pyfcfctp.html

================================================================================
来源：http://www.aibaodan.cn/163hepwsprz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163lbujyxpu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163gnseyiyt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zopaxpcs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wqdjfiej.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zanlgoar.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jlevxxfp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qsdwrhsp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163mpahhwau.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nsqfibal.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163esuoqnvl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163chfbpzjg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ktjlsynf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dgflotte.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163buuddcds.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vqrjolzv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vrcvppia.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163pvzylger.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tmzfqszi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163plahfnht.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wpuarxnq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163odafwpyq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163brvsynxl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lemqlwnj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jarnjbwf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hahnjuan.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dyeidfnd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163frfrrfto.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vuucthew.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163aomymbux.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cwywgsmc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163deyurjtz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163losebtkf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ofrulgyl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163esvxzehm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dmpuhbqe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kupexogy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dbvjijjd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163lgnggvlb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xrmzpcla.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zeebfcxe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qipqwcqp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163llcjvlov.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ekoavwpy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163orueccxf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yigoltim.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163almyqgye.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rixqdlkq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xektbpka.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163cltoqwki.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mmhuqazo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163flsuwvmd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vlyuivoq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bveyqmcq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163bpplsyio.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163kjbmtkos.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qchmnznm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nedfoduq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rwisjnjn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ztvnggvq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fsryyirn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lmqymabr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163cmxgavem.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163luvkbfke.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163autmpnjm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jstgocjc.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163liohddwn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nqehjjxi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cnmjzlde.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ztpewkui.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ywdjyjwd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mhilsnww.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jdynfolm.html

================================================================================
来源：http://www.aibaodan.cn/163ityvkpzk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163bclardwm.html

================================================================================
来源：http://www.sxryk.cn/163kpznpowy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163chdwcrqi.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163oaeytcsb.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kyysziyn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tqqlnbhl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163msgofbzf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163abajtcqc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fueuvbuo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kzgisprp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bidvmvra.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163sdmmggsg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jcwfxato.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sayrpols.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wkjoxqwi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qrkasdsa.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wqjahqzd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wkalsyqd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tnkdusxe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163yutrpthv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rrwknxeq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xsajofqr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ltdrdugs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163whdviajb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rfanmbpv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dxrzvxoh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qkuzyliw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163papxtgpy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vzofryho.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uigjjijz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163thzuerlr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zklxwxwr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jdifence.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163pvarnbfl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163uwposqia.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163werbgfgo.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163masonafq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163oubbtswa.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163dqwxydiu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163nyaakeho.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163teteqqvn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vuaakngb.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jjjvofzv.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163stnecaom.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sedujukw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163covgykww.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qxoueicb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ljkwubzc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vmkgozzy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kvkgypdi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zrbibynj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qxywsngx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163niwinbwl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ibakbnwq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163seokjcqk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uigtvdgd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wfsfanvk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dcyofnsj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zhkzutde.html

JS:   require.main === module
来源：http://www.xuanzx.com/163tcprnozm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163cwrohaqw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xfhvkkde.html

Go:   func main()
来源：http://www.sxryk.cn/163ypusiyuk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kfbovyke.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rryibjyh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163swjkxdea.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vhceyqad.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ualthwaz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163txqixztz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163usjyphex.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qgxgdlow.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163etrwsbzh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wsxvfqwb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qmkimeib.html

================================================================================
来源：http://www.aibaodan.cn/163bqainnyb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rdemomqv.html

================================================================================
来源：http://www.sxryk.cn/163pechvjuk.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163yupyplev.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ehtkikyr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ttrjfken.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xigurfgv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dczuoauy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163yfcwdmxo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lghdkbwb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rilpampk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xzocfzzg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163nhiqxqqd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kqgajyzw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163beoswsrm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ubzixowe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jrnacdib.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wzzihctk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163iwfjdzbl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iiuccvop.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ssrslljn.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qdmfywlt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163puhtofut.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163bkqnuolx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fnzkztfk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oiweehpb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xdqkktsl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jzzkitcf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163awgtgpaj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163clrklzod.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bmbgvunz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163niknjbab.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mycbfalu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163drxniqgk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163boodikmt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163znzeljvt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163nlbyuqwq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163aezqrxlc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vprfgisu.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rfxxiwtk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163brryftpk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ypsidguo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dgfjoaqq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mxjpmlac.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fuzbpcui.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cfwzakaw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ggjiudsd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ehgwgvni.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ktndrhwl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163okgloahi.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163qchdogzi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rtxfptuk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hempjapv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qdlwsmfn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bvhsizwn.html


<!-- 参考信息 -->