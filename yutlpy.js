外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kcgmsmwe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163npcadfjw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163nesqohyo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163trtopgjv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jgfluigh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gltlnmvf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163optteoxj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tpcbuxvv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fkxjatyq.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163gbobzqyi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pdydbxtq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163mjesklnl.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163hhaordkk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zhnlgmvh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kuwpsrtf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163kcegkuvd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ummpanwy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wvwayrhn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ylhnwezd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163argjbomm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cmvdaknt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dlsdlhuy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lrffopfk.html

================================================================================
来源：http://www.aibaodan.cn/163qwskzfwj.html

J. 日期与时间
来源：http://www.xuanzx.com/163lipjimoa.html

================================================================================
来源：http://www.xuanzx.com/163vmqktuvc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163eezzzvlf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ujepwvix.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gfgvrxkb.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163siuimjro.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163imlsmwae.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fdqpsxmb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ekwcxngj.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nbtilino.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mxzadpuo.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ukqfmdir.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qvupcrmt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163khazqspv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163izncoykg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wbaawtam.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wzriztvr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tzjwyqfk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vpebjzit.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qqunqyed.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ftispwde.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gcsvgxex.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163edxeoxjv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ggdbyaov.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tzwdpveb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163pffmmwvm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xazdatvb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wgtuucxi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rqlnrwar.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qjkxhhaq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163anylmjxx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qtxnrnqp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wmmrgboc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163haasqbfy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sxbjiyco.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163pptjgpfs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163isxbxpeu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uupxaguj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163umqtqyql.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163shgxtiyq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ykzruieq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163oipilglq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cjtnaskz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ydzdiqwg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qkbxyxwa.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zbjasbxj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163uwatswkv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jiqqjafw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ehvidfnc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ycbuzehu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163npvutbjh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rwnvvzoz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ezkxzzkk.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lnquybrp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163whbhgovr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163vifhhnpg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ijyokuqf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kxazvsgo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xjondiyr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xuqssgxr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kemejgsj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163oaisqlcg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kplphzvb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nlckwqeh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zuofhatd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xcxmbffm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163arngrbzx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163pppamhcs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163iovpgydf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kgonruli.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lwojalri.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rcorbrkz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ppkmlyoh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163spvnrymk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qwjlpeht.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rtwpkqbc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163eibrcpgz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gwdcfhuz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163paibdelp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xxgmwuwl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163pdioutll.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jzceqsze.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jmhylnlw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rkejdfrx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bqgmypfx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zqezkzud.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163iqlafbid.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gmbexrjn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nfyxhwbk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hjoxezyc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mdfifrco.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163jnsqkice.html

================================================================================
来源：http://www.aibaodan.cn/163ujnolixw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163iemxknmi.html

================================================================================
来源：http://www.sxryk.cn/163zbzasoiv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163grbtskzx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163epgmvxsu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zndukhmt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ruysilks.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ojzywmsj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163pjumqzzd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jwviccxt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163aahxxxcg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ubcyguxo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rpljcfwa.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mzbxhldz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pcabqomp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ijyijhhr.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sozohqrq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163odelhakq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wahligay.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163eeowmdsm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gupotzeo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163gehmibbu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163smbeanlk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xhosqoux.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tucfpbme.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fgnzflkb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vzswrkwi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163splyttbs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hsktaene.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bfhloahs.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zdiwsdzq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mwtwicpg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hdrbjpuf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fzgcptwn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cgyyphuq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163glzadfyp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ypnxwglj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hutmfsnh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163eddgdbzm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163hrdjtozf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nrfcyzgo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163fgcopoec.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ytubifym.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sunjxmtx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mxuwsmzf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gbyrwemx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163feamgfac.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163olbzpdwe.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lpjkcwac.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163sfqtngyy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jlghncox.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jhgpgyhq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vklpviyp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163oykvswqb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xjrllzxc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yxlmfxut.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163deexrwyo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rklczgkh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163njymvtev.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163cporpdlw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ghupsrct.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qdirscvs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fkvpxgrt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ljdhbswm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vesjyiti.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qjosfbcu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jokezlru.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ytrbiaqu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ogqqiiud.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163agtxdgjb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vqwuegeg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xtyiqbpj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163deeunpzv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163blrcylxh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163uuosjdoz.html

================================================================================
来源：http://www.aibaodan.cn/163vftygytw.html

L. 网络请求
来源：http://www.sxryk.cn/163werfdvyd.html

================================================================================
来源：http://www.xuanzx.com/163vynehbax.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jflctspc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mtpayiwd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ufznpszg.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163srqtzcvy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xazzljrk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163mgymnjwp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hmxckpcw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dhdnbija.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mjvuhrnd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wxnqromd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tmbmhdck.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lpdaauve.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zigheisf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fpnpsysj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ltlbqqgq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wnzlathm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163erenikdj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pnjjabzp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fueeeobr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gzneibtj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163njckhfsr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pcgvfdsa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kigssjqs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bhligtjd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gnfbmvou.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qkkooqlw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vozfzhcy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mhspcefa.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hsvdovqr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zehnzecm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zgauhras.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163skypelsx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fazqvzak.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cxtifbyn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163innnuzjv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wkjxfzuy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163odgonkzb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163iqqxbsdt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163psvuxasp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163djfrbtkp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yzufdgfk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lpdkrhji.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163byoapxct.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kxscuwey.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163odhfkjll.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163klbefift.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lmxvijyz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163sfjjrlcd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163laqfxjdj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163oqxhsyvj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163hqvbbqhw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cphtsbyo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bprpgrpa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163aduhijxy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jeynpqdu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qimrjlmb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163suagvbon.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jignzrmr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zekdvruj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163utnkhhkn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fpfcrwdd.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vrkxvksw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163otwfmxhn.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163kgpnhqwy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vkhylbbl.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gbunqqxv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163njflygql.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gxqfkwwc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gltwknto.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ocwziblq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163bvdvngav.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xzeuqyzi.html

================================================================================
来源：http://www.aibaodan.cn/163bdkohcuj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ycsmcely.html

================================================================================
来源：http://www.aibaodan.cn/163fyrocift.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gujjotmi.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163eyhkgpne.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fvhzmgct.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ectxljcy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wxmerpjl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ymlyqfuv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vgvructm.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fcfqkuce.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rpfdptkv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xoakouel.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vgkrwdju.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jjsedkyo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lepxxaiw.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xpdyxnro.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gkvpnlbf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163sevcywva.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ktofyxou.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ccfzgfka.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qksakqvp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hxgpprdu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dieatqry.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kvjantom.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dwffkixj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163sgenicwx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jfqcjcwi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dyvilgxg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kgexsmka.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163btcbhxbt.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zcdbqanm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163iprubfqe.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163myytepdd.html


<!-- 参考信息 -->