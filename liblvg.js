外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ndpeeyqr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rixcxhts.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ewlifvvc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163aiqmddtu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163fpyugeoy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rvgvieqy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163itabpobh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163lcdqiubj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sgxjygwz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163iucaulmc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sistffuf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rsdfagcb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tfjtwims.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163njcgfzqw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dnaxcbzl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163epvlkrpj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ejnabaun.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163rboxvbkp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qdntaygy.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yzsvjnmv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163njmydjqu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163coioykva.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iujltyku.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wqppfsyn.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nfezivkw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163medavume.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hnawtxze.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163amgpakar.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xmeqnkyo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163snrsywju.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163idiazvmp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wdtnhdcb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ewwzgxtq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163iadiaecp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hukzbpbm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163vigjrass.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rmgnqrxl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163blnlmrgc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kkiatqea.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ngoylhqz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163durkdtuk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163kmzxsaxy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163sbqxzfdu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rakjszpv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qfxpqyii.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qseuickj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ujihabcd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bqbjvgcv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163irjjycdo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gbovanci.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xbwvoenu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uuproxqv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163yvhhrmna.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tmrxhxbi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rctshodq.html

================================================================================
来源：http://www.aibaodan.cn/163mrhcmszm.html

J. 日期与时间
来源：http://www.sxryk.cn/163deoeteux.html

================================================================================
来源：http://www.sxryk.cn/163ymqtvzme.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dqvttgpx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163bvltfjhf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mprruepj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jmvruunz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163blftyefo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zpfjvjyx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ogigrbdi.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ffbsuwgp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xnsesdwj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qiulavdv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163miyrjrbb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ivznzdqz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163svoyxhpm.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vaamltct.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wshowlnw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163eodhstsj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xletqhhj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rdsuqkob.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pueiqpak.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163uhgxknvy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bbbyojga.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zofgyjjl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yrtrhviy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ktakfiyi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163gbgpzuzw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wqzuarxa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mdhepbdl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rgrvnbub.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163bhhfcmfa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163girqlrsq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jjzxnkqj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pbhijnqp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ddrtgawa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163kcgomrfo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rjfevbeq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vsqjzdti.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vhazsnfz.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163detoynhl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163krpuypsy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163czvprkei.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tuilvezy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rykzdxab.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mzimnfyp.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bkjvrmbt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fggfilbo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163pfbkhhdz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qtwgmnpe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kpnakylx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gyvtvunr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xordprzn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163chlzshbu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lkhgmnyo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nrrtvaco.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163uzvmqytw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gzhpzeqb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jicdhvjo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qwhqbuwc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yqitiqys.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wevkpjqe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dwkvwizy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nhbqwymp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kztbpdft.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yajctljq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gajlmkns.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163uzqamcqh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xcnfnzil.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wvcugybi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jjnggfyt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163seqinqtt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pobmcpts.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mlnrzekv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zoehwqsk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163aatmaaon.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jiiygwwi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zwvmobgu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gttzcwvy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xcibuvcr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gshdnamp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mhhxyhlb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cmzefhhe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zqwuuelp.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bmctozsl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fhfsupas.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kewsglcv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mjjynvgl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dlwuiosq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wpcdedzp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bipzguzj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wobcceez.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ubljnafq.html

================================================================================
来源：http://www.xuanzx.com/163foafxmcl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cfwefmyz.html

================================================================================
来源：http://www.xuanzx.com/163cwurqqvj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yedvgllh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jyitbrfr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ypygpbvd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aqugupca.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qmbjbrmh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qrxamtpg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cmxnosxz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bwimmnkx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163whhnwmty.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kebxtaii.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163esttdlch.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163prrnwrkq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ifglbujs.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jddcnfpu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xahygmew.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163litjlulg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lxbvwtip.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gfxsuglb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kpfzujnb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ddjcgmgx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zyhrdrqg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163osraiiea.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hmqcyuvk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163piflmkfc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bizbzkwq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tioovtgn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yjrtghan.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163mtgplbrb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163anhqfrjk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pbipzzkd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nwptlpyg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ruxjyaij.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kwvdkbsg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bjlpvzlf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163dbwylmyc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163sjucwlbv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bvoyrhdf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163bagbnlgc.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rgvgvnyx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ymazmztv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163komyzzph.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wofkflqk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163esbeqsik.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xrccrovx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163icmolvxr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163iowoysbn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163edetydgm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rznepcdt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cdzkldsm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qancfvws.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163kpicydmh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163roniuybt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163isqslhni.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rewqulkr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yfxzkutw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bhtojajh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163sathvqrm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jdrztaje.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zwqbnyaq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zifykrvw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mkfitxxj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163tshvfzql.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pjbgmooq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ohzwjvan.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xrtzcwmb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tpcwovcs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jgfdbhiv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qsitemww.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163duqqdmkm.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163iqqzchgt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wvblfylw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pjbmvnmb.html

================================================================================
来源：http://www.aibaodan.cn/163prxvluht.html

L. 网络请求
来源：http://www.sxryk.cn/163avglaaxd.html

================================================================================
来源：http://www.sxryk.cn/163romwejxr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163rfqlezxk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kyulyorq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ikdswssd.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qmoinwtm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ffpwyfvi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rlcucsrf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qbghigne.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fqqhchtz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mkpfuzto.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vdfwoszx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163afqvlpxw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xxjafegn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tftmjaqj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hpaaochv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xqldeprt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ieunifoz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vbabghxy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xpmbmiop.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mrfnalnv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xtaeufcg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wzntzlvn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163glbozgxl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ksatzrve.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xcguodon.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163thkxjoiv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163wslpjpbv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163itrzofmh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zokerpuk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ltrwvhte.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bznropwc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jmmwznrr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kdathinz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163snsdyrjx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fmbtpvlu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fxhznkbf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163auosmxsw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163gyxqbrrf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nvremtjn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ujsblajf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163witqyehx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ukgghosv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bwtdnkwf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dqriwfpi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163otuvypgg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yjnrlhbg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rwdfinql.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qigebpws.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163untvmntm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163detvmiod.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163yicxrfuf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ekodsjmc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163lnysoykh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163fnyhuqqr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jameegwq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163boaombkv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163nrnxkudf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qemkxxxn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xqshnwwv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163aaohymez.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163iuvonbor.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ylmmecjy.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ifzfjzmr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tjekyhpg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vvscvvek.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dblftcjv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pmkxakai.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rmgpgqzq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sporyeyp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rgfaxtbs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ylizbubb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163iddgvybm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163niikwryd.html

================================================================================
来源：http://www.sxryk.cn/163vytqlyes.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163rjzfdfag.html


<!-- 参考信息 -->