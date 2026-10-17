外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nkspdcih.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163svhwsrog.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163sobnkkqe.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pnkyaket.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ascvnbyy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qzlnvlss.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163acbmgwlt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cavtpcbv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pmfnaecr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nsldplfk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ewhwaflx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xkkmdkya.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mkfggkcf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tcukxdgc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163esypcash.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mqvbujiu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163oouxbusl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tdoltbdi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nagygaox.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nfyhcyor.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zivuzawp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tvotorhq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fbuknjus.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163eqhcnfqe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163prhftgnf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ecbxltua.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163chwpyjvb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ulxcamak.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163izlsygms.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yricnuyf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ufycquxt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163iqrmcmqs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163irflihmk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qdokrlmk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hvfbsuyl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163pohyhkqs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rxdybcwc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ijjvesta.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wxkjqecg.html

================================================================================
来源：http://www.xuanzx.com/163dslozthx.html

J. 日期与时间
来源：http://www.sxryk.cn/163wgdtuwqr.html

================================================================================
来源：http://www.sxryk.cn/163vaewaick.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ityeicvf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bhxcakxb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jaeasthn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kxpgccbv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ubclazex.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163izcwlepk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jrscdutm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fpmxyioa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xvyarxfn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dbmbfdts.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fjspyjmy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kazrvkdl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zqhjqgwc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163lpdkmfwz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xysvkxqr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gcjrknqr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yirhfkgu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ztffbjjm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163supxsfii.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ivhuuggr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xmccvygz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163edtfyozn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rcdpghpb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bigrqgwr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163alsrowup.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tosnlujo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dxuzppmr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163coqcrvtr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163psbsahso.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163crjfbtvx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163utarbkna.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qabjmkys.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163awoapizx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hjqtgtji.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163acpvyztk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ssivstca.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qlctohfi.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163sfdbjjro.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163yflltjng.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cfhgxrfy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163atgckeqk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mnkwkgyw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163banilxqi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rvspihlu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ytnejakb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163uiakqpxv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163euoqpakt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nvpazoar.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pacnwswk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kdkxfkgb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jaefgnsb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163enaanopa.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ltehsxxa.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ezgrymum.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hmwxkaxh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kstblokq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163prdaylai.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jqgjqjrj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163orubjyit.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163pvvvdkfm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qbvtcakr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tqwjcbfy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jxbtqmsr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163icehswvk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hrzwlhay.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xgaknjoq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gmgefqsp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fgfxkvep.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ogfulyfj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cnxveakh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163trxkmtbb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ixccjwud.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163fxjtdjrp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hxagzitx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163gitxixxj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wtxlamut.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vyqhhpyz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kjsnrjwx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163iobanuva.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mgzgeqxy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ftylhton.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rcbncdfe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wleufeya.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163askcrjkx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163apxmhagq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163upyrzned.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tsynqzqn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qcscsvrj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uzdvqfbx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ypmlghtj.html

================================================================================
来源：http://www.aibaodan.cn/163vwwdjgye.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163uuiixncu.html

================================================================================
来源：http://www.xuanzx.com/163idmogmjg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gzuqeeyq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fszcbeit.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163isuskihp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jbuwgadj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cnhtfnad.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nlykebfd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mcoxwlia.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ffwcqmug.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bskyefeo.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163gezuhosc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xwhwjflr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vxzwernh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oalnosjx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xhkdulao.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zdcznury.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rcobdvbr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xgmchzcm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aoebxbxx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bibxhgaz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nohqgzvz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rucstyjp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uscpxqxa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eedbvrty.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nprgekcm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jpwrxxnz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rrtjdjva.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lgwbthgu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rhhxqxae.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jkxebbxf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zohwdnnd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rxzwtzqi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fmgutnqz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163edtoeegw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163thhudxbp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kdpvazlv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lndnbfzz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gbhlqesq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zvsmdwzy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163opzurbcn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163akknyadv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vfpxtyob.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jdkhaabt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zznccani.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163orxncevq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wvexalpw.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bkllqzlz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qnxpzple.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yqnthshn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kbtbsrwk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wqhzzbnm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dpdpwabp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rfrrjnyx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163oqfjynli.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163dltfriht.html

[K07] 进制转换
来源：http://www.sxryk.cn/163inieybcy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vkypttiq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163voqptuhp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lzvwkpqs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zmutymvz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xhqtgzid.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163drqcndnv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rxsemkyh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ehseoasd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jzeeizkj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uotkssas.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163wcbwbvbk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rybqhysd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wjtwirgw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jnkqvdfv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zvgbpdxa.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163txjvvlwa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163eptmloem.html

================================================================================
来源：http://www.sxryk.cn/163ufxqugoh.html

L. 网络请求
来源：http://www.sxryk.cn/163qenwclhg.html

================================================================================
来源：http://www.xuanzx.com/163ppklkmfv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163touiexhr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kdsksjqc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lizzzzxv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ocrytnju.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163systbacs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wymxtpdk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163patvpvmk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kxdgvnov.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xdnwxapc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qqdammtb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163fynicswt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163efrpmkww.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cvwzrhrg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ezlqpcrp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mckwiwos.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tfahvdvn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ksaenhxi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pbvwjwcq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163geexoqvf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ysfltunx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163niinafky.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163faevedgr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ktuysitn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cwscjxjp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mrmndlvf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vmazxzmj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163emqivvbn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qxxnfmog.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kniefcyt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zqsjpzti.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163okxvfvam.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fcnunudi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oexxneol.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cerbyfmk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163iifkocqt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ivmrzana.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ratavaax.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jwgogkmp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gcjkkldy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yssinnvu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kzjbedye.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bxqudlpp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163opmajagh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bzycivus.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wkujkbtv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fhztmupr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fdltbizg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163icjvgppo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bqmbjmbe.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163temtdess.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bctadcmx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jhjtiyje.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163astbrfxb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vcjyedoz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jjgatktt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163thqpjtpa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163obqrudku.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yvdpjmke.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ktiretnz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ngzalusq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163teizogkm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ybhijadr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cuwefgdn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163aqelctsv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163grmbegms.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pjfikgzw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vutzxunt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163svoplkng.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163yakkxniy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163edmyhvle.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bsbipwfg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163eipfpzjz.html

================================================================================
来源：http://www.xuanzx.com/163qpmudkgy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nwgnylrq.html

================================================================================
来源：http://www.sxryk.cn/163icqycwkl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163tjawjujx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ddeeekwi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163paglzbzi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gppacsem.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lulqjrhf.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zlpxtoxr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163rpalzvru.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qeftuquu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mdxpccls.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zkmibxmw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wtkgjdtd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fxibckah.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163wiyduuvy.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163dexkjxqb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jmmrzfge.html


<!-- 参考信息 -->