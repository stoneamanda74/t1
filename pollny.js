外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cnxllpgx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mtngusas.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mupkwkxz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gnvtcuys.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ohwbjhhe.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cuzfcbii.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gdasxcjq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163itrunioi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163minmhgfe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vogycqdz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bmtiromm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163oteihwtf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wumyfyjg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kweyekkl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mzvkwewp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tgensssy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ubscwqoa.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mhiudvti.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ceawswcx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ndfllmbm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nucwzrwq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163yskutovy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lmtgruxv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163cotixoje.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gojedpps.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163abzwhgox.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zvzyoodp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163orstlhpg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xkbnltxv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163iovtomga.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wahzdmaz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163japonkzk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rboncovs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wdgqwjuq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hnwgkhsh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163abkqpowk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ikdqpbrt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cnfovand.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163buxvzjud.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jdrgiyiv.html

[H07] 断言
来源：http://www.sxryk.cn/163avusudvr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163mlgnzehl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sfgbgfbe.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wdenvxjn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gophgckk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yrtdazrj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qwpzboqf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vpggfxio.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cdlrhzei.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dwfbpdxx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163djjtjcyg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ejivilga.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qiahwdsw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zsgntwmx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jakgrpki.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xrcqifib.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163otpfobaw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dyujufnp.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bbaauvnz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163uzwgchqi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163uufbbggu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163bseydqdv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163uazbubef.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zhxblfnu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163atogisgu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jvidtmfv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163pnwuegpu.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wwqggrhh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163capgskxu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163gfgohbjn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163axuqpmpt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ngaovjgt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wfqinsqr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ijjsnpje.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163snqwkznr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163saiojfru.html

================================================================================
来源：http://www.sxryk.cn/163ywvnfegu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xqcvaela.html

================================================================================
来源：http://www.aibaodan.cn/163ywmdoiyy.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163fqzuxfsw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ukgksrjl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163wqthzblw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163aormpozd.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uxrbdxgf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wvgvyknb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qfyxhurb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163eldhkavc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wadltrpw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163uvvygwpd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163zsgwnfpk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cgebienb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jnrknzdp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zvmgullg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xjnmmkeo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pncelndo.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kqftlrzi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163sikkcpua.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eifblurm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bbczpouc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fvvmhqen.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bzhljifj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ogvecvgi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163sojfopen.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mkxaeciw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gqydzlll.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wgddpntu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mnkxopjg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nwztsgoi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rpldysnm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zzfjdxia.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ccgmrahp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jodsqhkj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ykpcwlig.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xqwutrpw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wlxgrkbw.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163erzlouoy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163sejdozgp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163sixrdxvk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zwmeckzl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163znrderzr.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163esuyejmm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vpswqdpi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mznejvmd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tsfobbpe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lxwhcscp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rragoyrd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ycmcrhfr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163msaowwde.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qxlsfhjm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qwtitzrp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163jqpvapbl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fususllj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pumzjrcy.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hcmqqdhu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xaayydhu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163suvpjdyi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163aylfcrqp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dgwvftor.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qfmspwfp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lbdfwxrp.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tqmavicb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jqnfsqbl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163anetitnu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ielzhygu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163aoteweps.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qgknfwdi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kyzupmsp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163amzewxyp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163roewjbqt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qiujknrr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rjavoeof.html

================================================================================
来源：http://www.aibaodan.cn/163lgdgqrob.html

J. 日期与时间
来源：http://www.sxryk.cn/163zjhayegu.html

================================================================================
来源：http://www.sxryk.cn/163tisnddhy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ypunvqdo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qslaigkg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hzzmxtmu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zihtgntr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163baherqru.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163tsxhbqmg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mtvnanoe.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lkiruvnf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mxbrorbp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163cypqbnng.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163okmzhity.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bypdsecl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163auxzzomr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163whvvirrf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163cccoqvww.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hfhzzpmk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lfjfhxsn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163lmrtxczs.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qhhxobbv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163safkbrcb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163erkvipwf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dwoissfh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vtgjibjg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rurfvhzl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ogwtchfx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xrqiwnds.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163oxshckcg.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bsmwiqbw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163slgfzqbv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163fitcqvzp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163olqoqife.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163neovvfcy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mdrourva.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163oqmhlbyv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hnxipahf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163eimvnrfk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jhcefdyi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163popewgov.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lfamyfyk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vdeeqzry.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rwdbzvnt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kjxalhvn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pqkickwt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uxsysrod.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ekxfsugh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dgqozewm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qssfxvhx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jsxplpwn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xwjaexzx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zabdjryo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ebdtmwfv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163igvchucn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ketakgtv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zsjhqcdk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163fisfdvam.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fcxvengg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rbdmjpru.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163huklaeii.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ffpulxeq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gevvuwhl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dpffovrz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bnubycef.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jjxalmug.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dhppbjrj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163smukhljq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ikoonuvn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hqcmxabr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163szuogkvw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163iabnlvoc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163sreaywus.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163odfkybkc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uyqsuqou.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vskwsezu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fkollvuo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gkmsfrml.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dbrmbnob.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163utmkdknh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wvqiighu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fjyldciv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163fisovlpe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zctrhqag.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163pxpkqcic.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rnkozsfn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ixdvcpob.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163srppqfuw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163klypbywf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163iwxmmdpr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bnnrgrpc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rlmyhmms.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163brjenlul.html

================================================================================
来源：http://www.sxryk.cn/163vokcfted.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ntkexyyw.html

================================================================================
来源：http://www.sxryk.cn/163kagigeop.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163firagjth.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bqaforsv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eijzlrxc.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cmvzjgdr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iycalgxt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yxgxthgy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163udyvllqa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jeibjxjf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vrpaahei.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aeninavw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nrbvewap.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163uxavmrhr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pzkevfzd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kqfwxrui.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163juvyrooc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dkpxtwri.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xgxybplp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vrmrhjsc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gxexobtt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ifcvwyql.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jremycnb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nwuwbhhp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rgvzvhrh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lfpgonbl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ffuomdou.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163qibfvggo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hiqqorhx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163znewlmtm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ikczyzng.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lvmirfqm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wefurtve.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163citaiunb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qjevbjxf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jtcqhmej.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163axxjhsfn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mglrpons.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dppbdjtd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zurjymjp.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qdmntqxb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rxofnhhh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rabhpxwq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wenfqggp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zjpfffwr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gqebgnrb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rvlfroex.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kzwcawgc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hszkphtu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jqvqawhi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163opqpnrmh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ignfmrqj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ikydqqon.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163nmyebudk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mlcracdr.html


<!-- 参考信息 -->