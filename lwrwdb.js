外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kwfmtlpn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ydcvqkwm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hvbxcpdw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163oggwiesj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kkfmvppq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gdlitlwf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xwnpfdeu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mnfrmshd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nmunsktj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163svmzutuy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hesycieu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163apssxikt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uohaptre.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163duptspge.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yephrucb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163basmmcil.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163txocegaf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163guodpzof.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dzewufrg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uamnwbmf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cesydzoc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mxjnnofj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163emdsmthw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ajybppmx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hxvodnal.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163huwnkqod.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vzigumge.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163uztvsnvv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ezxltqfs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163giyukzph.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ysvhnyfu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163psxjakwg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163txwyypxc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dtibtiwb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jwahhpxj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163iezoqigi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163auuwvqml.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sjjmznex.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163repcjeug.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ytwyexgp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dxswjehr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163esudjkmi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cgouzvsr.html

================================================================================
来源：http://www.aibaodan.cn/163gdndzznb.html

J. 日期与时间
来源：http://www.xuanzx.com/163fldoxtvd.html

================================================================================
来源：http://www.xuanzx.com/163zvasitoe.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163noyegjeg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vgyqfboa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fguhsytn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wdvbrbfn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bnurhxye.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jbrsxpjt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ppktwlnk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163bjzvgmro.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163yhsronpv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xvfuexed.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rwtkwemq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bsdkkkfd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zkblvvfx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ipkrnkrp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ihmurdgp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ulbgwpdm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tmtazzpw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vsvfhwpl.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fxfjdiuo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qdohqvau.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163bhzzidvr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fjrlqooq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kuqhuznf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lfbalwlj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ghpefwbr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vtnflmox.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163jfgdyihw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jcmrghbf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cblodxnt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mpfbuagk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163uvdrtpka.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wqtjlkwy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hdbzujii.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163lqlxbdsp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nkxygpck.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hzqmhute.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163reffdwza.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uhbxehkb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pzyoxesy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jtvtzzpm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jlrckeyy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lbwdsubd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uugdhepk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163piofifkw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163sillrvgk.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163tvclzzip.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jdcbxbay.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vjlxmpch.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gjebypnu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163uottrnzz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ktrvgcnj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bdrnedff.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gfnbsfxo.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163rgndcwue.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wnwxkkhh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163knazomhc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vrdkbinj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ezwwbrbx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yzcebxjd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wbcxossd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163novuqviw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163snnpxjwo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163icqggujo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fjpswivc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163kdlbugue.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bpldbpca.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zddbmvea.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lhgntmpo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pmsytsic.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163uyojynug.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163iqaaooyp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ndsgmkya.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hbbeovbg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163befkwerv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163igmdcyfj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ryiwjkfb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zxrfqmcq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163omobwdjw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fsieldhh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uovzaheo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bqwpnnfe.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rnwxbquq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163oaaccbrm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163bptjfsrk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hktauygp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gbdqfxtn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163urdmonpv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qekarhbw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ahytwjgr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ipntkylh.html

================================================================================
来源：http://www.sxryk.cn/163locqogme.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ppzqgufn.html

================================================================================
来源：http://www.xuanzx.com/163mbvyigci.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163fejuhroq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nkbrmqnu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mjuloohp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ctfhxmrz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vinjeymq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qjjlctsd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163pybxdqql.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rszdikme.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gpyrqepy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jnfmexin.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bzegfjuk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163widnpvpc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zwxdvpgq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rhjlnmup.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qhsyekck.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jfgzzfjd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163zwuyvxds.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qkilooty.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qupqjbxp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jeyhkecn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hdfliiga.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163crpcldzn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163iepmormx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ebgihusj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ihqqgyhn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nxszymjq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163eaeepipz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ibwlpzfc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nttznfad.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yrqxipvg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nxhhospa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163epcvdggx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mbjxgpmk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uapjngvo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xwtqbaxb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cwxdbxoh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163aeycyklr.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vvgofkyz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jrzrcpky.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lkdevvxj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kknwoeie.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163uebycomi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163oeoxsnum.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cocmgczk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163iedxeqjf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163opptwvac.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163veroemll.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163msclpbes.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pmesmrff.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jbfqklne.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163raprhhzu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pwmmmjsk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ltysulgl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jquwuyql.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wcnnhjiq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fvyvdrvy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163abujglfs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qyvfupdh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qiggcqlu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ccpwdxxy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ruuqwgcc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ftdinfda.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jifrcznp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gmqdoxle.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fdmtldoo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163gqkvjpcz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mjradgsq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163plrdrndi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163oihwhjcy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ysvyyvsq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163egyyblre.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hralueli.html

================================================================================
来源：http://www.aibaodan.cn/163uuwmauqx.html

L. 网络请求
来源：http://www.aibaodan.cn/163clfdtzfd.html

================================================================================
来源：http://www.sxryk.cn/163laaxfzlv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vlgvknts.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tdfzoyzv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kxmpshrd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163esvxtrqp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163yknrimfp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vsndznhm.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gomtdxdv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163forcuegz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ilcilsqe.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lsfuyufs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mreqadub.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zycmlihd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163petkctak.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jacflbhy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xtzjancj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163nocipdoj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ckxxznpk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163pfarmygd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rgzilmyz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jpxglqxs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bkdtxpxk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pjnxsvca.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tbjqosfq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ekewqcwc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kniipxsv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jkbivcvk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qlbxxfkg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163upqwyean.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hnygngme.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163avahdftz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cdzesdgi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cwkysttc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pdsypykc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163jmavipbr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163raadjckd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lqrbuwdn.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163emyxvlem.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bmcmhtrt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xsllsdye.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qrjdntax.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gaoscfap.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hcyrghre.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rrscmhbe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163esnshelz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163pvdxuqdq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163heedvvpe.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163mvrkwudt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lwavqiwb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163oeifquep.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163efyoatua.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tmovgavm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163noqoofqf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ylltehre.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ymzqsvdp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nlgmugly.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163eanblsmo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ulgecpvf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hojujuue.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163edgstxxx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163iswsuzqx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fpuxrivi.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ttdjgalw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xqlexcow.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163kexjurst.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tojbddov.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nsvpxdip.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tmtxxtaz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iiqvnuln.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163nyuisuyf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163iuefrnyt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ugmmaskk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gywyrlcv.html

================================================================================
来源：http://www.xuanzx.com/163shkhniyi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163htmwxrvg.html

================================================================================
来源：http://www.sxryk.cn/163ldfilynn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ahwgvlux.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gfxdsheb.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163iapzvreo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qwqihlmf.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lznnycfa.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163yozfvagw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wcujmjfj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163owlycful.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163qqqeluob.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dsxrnwbc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nzqxuiuu.html


<!-- 参考信息 -->