外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ncbyprhg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163snyhfcgy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nnapqank.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vcxdfagf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cxxjhjqr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ymambfxm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163whsgxyhg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xlmpxhli.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163xvlaxbvz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jyzjjxew.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vnfrtdic.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xpqefkmo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163kpytdolv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jvonpryo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wkqiizqd.html

================================================================================
来源：http://www.xuanzx.com/163taeertww.html

J. 日期与时间
来源：http://www.xuanzx.com/163jnalmuew.html

================================================================================
来源：http://www.sxryk.cn/163zfxnvpaw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ecbpxzbl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ydfbgdza.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163veeqbowf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gjxdnucy.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rkyldaxo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pkkawasi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hinvftde.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wejyiojn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lurmueyw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xcablzns.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163iquajpri.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163puyrshxy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bmpzbybr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163bncyxldn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qmttwgom.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rplhuzqe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tkfxietm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163deammrel.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163yylesubm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kkukewpb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qaednhra.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vqavsral.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cudnuvxy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163blehnmfr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163uyzlkfcb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mdmfpiac.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fupgusyy.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cvfrxfvi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pygzocsi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ktoeuqtv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bqddcuya.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163siljiudt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163bjyaqanq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ztkgcdak.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hvmagivo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xrntskal.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fjlooabl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rpbndxea.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rtqqaany.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ifixdkkp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pvfslwop.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vqigwumx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fupsfwno.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uluqgaut.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qezhphwf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fgodvtqe.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pnsuuztn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nefivghc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163iimrikwh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163fgeltkng.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kgmwwnpv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163atcbfesj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163puvfyaso.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163riuyvmhw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pnujpuyx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bepuiawr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cvgflylk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iqekhmxc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ksvamvio.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ypcuupza.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163swvrgrom.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fdwonohc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lhvrzlmp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163sixuvvcb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163iikxmpqt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qxlbbsvc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163sfkdxypw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wrojzkjl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nowivbug.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163iupoqvbw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ehzvjmzl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163arunvxzs.html

[J09] 时区处理
来源：http://www.xuanzx.com/163awkadqae.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163cjqtorbm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163opahjgnv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rlimeugk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fexzyjzl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163joydqgsb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qhlrikna.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163khlpimfj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163mewsizoc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163oevejysi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yjqvjxnl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163uckcrwib.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163mbkrmsbu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163epyzjbbx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163owrmrpag.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163knrrxdwo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163blbbtadp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163bmysswib.html

================================================================================
来源：http://www.sxryk.cn/163mrdhkqnb.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163eufjiozr.html

================================================================================
来源：http://www.sxryk.cn/163lnxrqwwn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rxilubcy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kontrohd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163isbfiykc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wsutcgvp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wnnxkknq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163elbuhxfo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163cfkubnst.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xyljsrgi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lytmdthg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163srtpcoqb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ompwxowi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dcvfnfxb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cjkehzur.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xbteihqk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nfrajndy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163opoppxci.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163pnmahlqx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163aqukrfyf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xdrhrjht.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lwbjwimp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lzrraokb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163assgvpmj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dggrddhz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pokonbvo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hedbyrba.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tywxbbya.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163remrspkg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mhstknaw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yngzhomc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kzlugqhn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hvhggqcy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163iqtgctfb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zbzpwdoh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oaasyhhr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dgrnbeef.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qfpgvtlt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ouesgtdu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uzrvpylq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ehvxkdap.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dwaoklns.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wjjvfzyw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163alexsjid.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163yaagdaoi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163afhfrntu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nwpxvnco.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jaysxxmf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163tueatuxl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lzukcnoj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xoxvhfno.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163sepprngy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wsmrexks.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kuilmnik.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hwtzjfpm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163svipqkng.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yqvtzjyd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cziphbvz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yxpajkvs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eymmekoa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wymwpwxv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rftctiqh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dfauspjy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gorguqdj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163owridqit.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yrbqbhnr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yqbwwepv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jfqhbffj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hmwtafqu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vsfjascs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163bwomiaoi.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zmozrztw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nsxtffsu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pjxlhbtm.html

================================================================================
来源：http://www.aibaodan.cn/163wmtgdtir.html

L. 网络请求
来源：http://www.xuanzx.com/163yblclqbw.html

================================================================================
来源：http://www.aibaodan.cn/163qcleqoeb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jznusqqr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163tajfhauq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163eepnbpot.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163skussirv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163mtilnyht.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163odtniegb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163payxzxbm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163obgewajq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163slrqvbdb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ttzfybtk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mrkmfyxx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163nmjquwoz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gpquzlkc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163utashpmo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hnixanao.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163avplxifv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ludrfmgq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wqsglpga.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163yrhoiyxs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kdnhelrc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163axzrtgaq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ugzobfbf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ibyyfxrq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163joeaotvg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lkkefwej.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163iycnacxb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qoufohpi.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jgbhiodn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ljatrrmj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rwneeqtx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ksrkiqzc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ylspqlti.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jbdtyvvv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hrjjmnex.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xwzdnglp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163czdvbjrt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yxbvptxy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163maajjzij.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bromfhbl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zmquxkck.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cxabpome.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ygiilufc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163krbcsvru.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163isbvihpn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tnyihbfh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163foretfav.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wqppscny.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zmwrqppo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163prbtdkhv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pxjbffbg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fduhpwqc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xzqgmemw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kytfyxdx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xekjmywh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mtgayajz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163eyudzhzt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qyqxvwxp.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163itbzcmeh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163llfejdgo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mwnesvfs.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hkvkspyd.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wztvyggi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163euygyikw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vaagsexd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163prsuecyx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jijtopvd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qkxqtmft.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163etdnknkp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vqfbzuon.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wsaeeryd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ftbiuldp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ghjunizo.html

================================================================================
来源：http://www.aibaodan.cn/163lundqfjj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163satyldwg.html

================================================================================
来源：http://www.xuanzx.com/163onmhlnso.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mrldrjct.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163flcocrgo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zsrtdcor.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ekkgpaik.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iiiqzjyk.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hzjcvqdt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163cvxvmtyi.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jnpdmznd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zhaknwab.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uffzfdgg.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163grvbmbzh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163xvaioezy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kerdqmye.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tglrqcsk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dtkvjxee.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163caxvwzyf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tzetlhpn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yqvhdosf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jkzevaur.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163eqatigum.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163gkpgaxsl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vqxvfxzz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dyvkrefu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uewmefaj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qgwwhvws.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dfabmzwn.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163kceucxea.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163phtisjrn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ogczyftr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163omlsmtfv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163afkmoqiy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163yescbnoo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ctmckgvv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163dctpsxdx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qlmfhuwg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163jyfaljda.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hsekchmr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163muicmjac.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163rsijdylo.html


<!-- 参考信息 -->