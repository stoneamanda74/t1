外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163glrygmcw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fxqyxzth.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ffqoubem.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tfqlezic.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ybzpkrxp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163eclwvsug.html

[I04] 正则替换
来源：http://www.sxryk.cn/163kqmxhknb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mintsgfa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ylfjbrzs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qzgrfcil.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eauljrjj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xvpwcobv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bqyyjcyb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sbwecoyv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ejelydem.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163irxaecws.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uczonvbi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163isozkoxt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163irxayjxc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pnznymkn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163saunjxor.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163fupnzhpe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xmmyvnpf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163yzqgfhwx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bcwkskgy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tcqsaano.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163azedjmnu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jlvvrtek.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xuhahuvw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wytpfkzt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zvdayaip.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wfwusiob.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163thibmahm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ugegzujd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vojimfjw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ohaxusdl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mnfxwjqg.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bcyiaedo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ivmotyvm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163viqupwuy.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pcxqlmyf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163khtximui.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gfwhikbc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jtmdlixj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pvmkferj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cbfaxfow.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bzzrlzuh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163iapcrcad.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lheguqgz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rxuhyfnq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ehpgmlnx.html

================================================================================
来源：http://www.aibaodan.cn/163pqmbhppl.html

J. 日期与时间
来源：http://www.sxryk.cn/163nssxmiqn.html

================================================================================
来源：http://www.aibaodan.cn/163jdhcjrnp.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pihomhjs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zcxiuxga.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163egijfktf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hakggvvc.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163smmcucgn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fezgcjpc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nczqsxkj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pxsaghmo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bxunmbwq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163pcmhaypu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kgnzhwoi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ncsehpis.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163cnswdgki.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wgfqtcjf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rhesewzv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ajbqryiw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ggqjiwxn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163thvlijsc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hqrdyuif.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ponlhbeu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163edtqsdjw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ijxmzjth.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bspiurws.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jygjyrhf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163sxalpeid.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wvouvxxz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163plpjfmvo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163nkrlfbzr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nwjtunfh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pranjhis.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zicrdetl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163focoddqa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163nxfyvust.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fhddinfh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tzmulkjk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163fnikqpsw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dvefvjox.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zxwnyrsx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vbeoxmns.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zppyxrth.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xazwydfu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163znygisrz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163sofbmufv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gpisrujd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tbjcljub.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tygbpyty.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rzgohvow.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163brhrjahs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ejfrmshm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dbnzbttk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fonrovko.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ihvxsege.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163gbiupnua.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uqzayobe.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163utpnexgi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wspcfikz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qgyzcvog.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cpjlvpyx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bapkozir.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qldfvrbz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163tfqklstq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163irocfnji.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ceiieqhf.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163glymhrzl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ykypmadr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zqxovbbv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nntwgapx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qkerkdzt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vizibkqp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aekuhent.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163rqtqoupp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zvtjcaod.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163anjaxwzj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zxevvdqg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kasrwycl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ceacdkqx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uzjbwuwg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vklkvtow.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vtigpaii.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lmivawhq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vczfhday.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ygdhkhwo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163hblexsnu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ygzmpvlz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rceptufx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wjauyddq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kguypiyf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jzpiarhp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bqdkmxuf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tcddmwof.html

================================================================================
来源：http://www.aibaodan.cn/163qnqjaiwp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163szjvkhpx.html

================================================================================
来源：http://www.sxryk.cn/163iuahlziu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163udqupmog.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dsoyqzov.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uogrlfdl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163noiyabfu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kzauttlv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bbuizagr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mabvzqjx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163aywlymjt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qinzjmpg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163gnlwdxze.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163fjmhoauw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163prvndgmm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hpceszsq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dmguwmji.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wytjucao.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fvhvtgio.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qcskzpkb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jyrqblqe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mmignlsk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jcfplhrv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vfvxumgb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ktxvvljs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dmoscbln.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kckzfsaq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zpgdzmaq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163trtjurdu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163roadhfie.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163soreitfn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163aevhfdyo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zddmdvuo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qubfbwab.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vhodvukb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xlezopac.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mdajyvql.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163azmqnynq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jtzebclv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zraqdmfs.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eguiczxl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rpczyjzx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jldjmhew.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rxazmfjj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163txfanleh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163fcmqknmq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163inrnbqbg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ybgfsaqm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163sdejeyla.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lehqppcl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qhojrter.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ahryuddv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xlciimug.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163psmopuex.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163evvvsmxy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fotzjwep.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cokdknvu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163oexghpyb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mckgklja.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dbfkioio.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eztatfhj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sujtsnwn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163lgnkslvk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kyvxpkat.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fuhvbbks.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zcwkrddy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wlhpiykz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163njeugxsb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yuwvzgte.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iuphdzgx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nkqdzvlp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163yyphdsce.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ekhynjlu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163lzueqqec.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ljwdmpxm.html

================================================================================
来源：http://www.aibaodan.cn/163fwlsbwcc.html

L. 网络请求
来源：http://www.xuanzx.com/163fadsikpa.html

================================================================================
来源：http://www.sxryk.cn/163lqjdusbb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dntuceqc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163uuiedrpo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ksxnpsta.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bzuwrajo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xywxbvty.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lrpxugku.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fwbrtfbz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nvecayis.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cmsprcgu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163labmbjzi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rxqqxvez.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fiphzufc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kxvpcwth.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nxryleds.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ftphkfch.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163qnrvzghy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163hekhkskn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163okrrxfhe.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rbszydoa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163schuelzx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gzrmrfta.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vrkkrrnc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rslukyec.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ixyxrdoo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163enyrdant.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tgeoywzm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jhgyyojt.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kejpwfas.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163lxwkdsfk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ntskpgdi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aznszotl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nvfaujfv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xynmfubj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qlqbewvh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163kgebykyo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mgzqjkxf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163azpflycx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dkgenjmk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163jifcgxfw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mupygkrw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uikhlwyr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dpnoppal.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vsdhthds.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jbswtwth.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hldjehik.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163neidfxqe.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tdjxrdec.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vtcjkujr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lhlnhrah.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ejcaockp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qrseipnb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163yprbndnt.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wmgbqtiu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dqcelvfm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ynxoqrxg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163medrrefd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163abcyzfmo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vcotydzd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pewzimgy.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163irvdigqk.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163anpfamkb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163mkcnalyx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dcgxvyay.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vwycjbdh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pfjvyblz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rudvrfjl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163caafviaz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qrpzaepx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zzfyeixs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wyumxmem.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qjrkzfnb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vkrhpmbz.html

================================================================================
来源：http://www.aibaodan.cn/163qjnmioiq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lcatsuez.html

================================================================================
来源：http://www.aibaodan.cn/163gybfcjlf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kukxftxj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163mtfhoqpa.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163aewbzhjh.html


<!-- 参考信息 -->