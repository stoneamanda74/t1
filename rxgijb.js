外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kskoqeif.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163vvrrdssk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pxblrdvl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vubqikbv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163augpvfgm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ixldaszz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163okaejhai.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vyanzuss.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163irpqoslv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xesgbjzi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163sdagdmpg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kjyrqgpt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hzirgkcv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cgzchtyi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wjvxzmyr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163evouwnqg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rpggegcl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cadtnclu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zfylqnrh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163gkxwmjwp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163perkwlvs.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cjmomjte.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ckabokeo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163rkcwyajr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kcusgpsd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aocmbkyx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kwromuel.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fvbytmey.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nvfsliim.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tvbgyjga.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bdatnzqk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ilyhenjz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163adnmdwgf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gikfhdlv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vtnoumcs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gemdoacj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163oslqyooy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163frbqhtye.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tlhzhqga.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wllxyqpa.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cykhmoar.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fzawsbfc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tgojrljw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fprrhsku.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dakhhavn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163uailpwhz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zpgfnrly.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nyxuting.html

[H07] 断言
来源：http://www.xuanzx.com/163hbfdxtqg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163akglzxal.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mwsaqelc.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wldehujo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163koediomi.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163enhcbcdj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163fawmfboz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163hljpwkio.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163gawefvfa.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xmjsncjv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ayfmogqm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pzwephou.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dlbbtaao.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163rftlahcy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163epqejaec.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lveafvnm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163owchyurf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163efqkvwlv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ircrkwos.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nvhnbjxw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163okbfelgo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163hsqtzhqo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163gxwaxmyr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ehljgsfr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nidrxeyz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lxaanvzj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163itmeonwg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163msxlfcww.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zqmffsvw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163amzhygdn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fhpkhxqa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xxeqjocp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jooteiag.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163pwxbkyhf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163yzwzbquo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mzahynar.html

================================================================================
来源：http://www.xuanzx.com/163jjlgapxq.html

I. 正则表达式
来源：http://www.sxryk.cn/163ygslwayy.html

================================================================================
来源：http://www.sxryk.cn/163qbahjqjg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zhesmxss.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163askcosta.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ghxxcwqj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bqkapcrt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hovssxui.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ianpbuah.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ssnobtcl.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pmwubrcf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jsxtjzjo.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ljsabbka.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163upsngcel.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nkczgriv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163oarxmbvb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bblpkgjw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zccpbmjr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163oxrwmkzy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cneohezp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163iqqjryav.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163wfcgshgm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bhisdzvb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163imefbift.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ilouygyh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qqgghoom.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163lgtmvopu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163eymvkphn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163helofwhz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ykiohynl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fzfvvwsc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163srtpkrns.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qzwdmydo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gyhytizv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163defzbasm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ghkukbwd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ykpxalmg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163afwizvad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bzmrrbwc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vncoukvl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jzspfabi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xmflimrb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uvwnlcxw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163azjjwayo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nbjfbzfj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gpgeisbs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zzfigwrf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163iwtkhiua.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rlwaozbi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jkxpgizf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163jxzhpmej.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163prukxazj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xnljqvlu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163quobumic.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bixuzlby.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163aezcxngg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163eblanyvl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rsobsbyr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ipnifdmp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163poyrxbph.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163tghszxss.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163sxzbyvsm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ngwetytg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xalxprvn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fksduoaj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lboauxby.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163evebwnzx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lsuurovg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wmjdhmnp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ceiuvkdy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nvcwozub.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163znnknmjj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mnukecus.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163begzogvz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gyyybsrc.html

================================================================================
来源：http://www.aibaodan.cn/163xvhicuiy.html

J. 日期与时间
来源：http://www.aibaodan.cn/163itjvdvhy.html

================================================================================
来源：http://www.xuanzx.com/163sikztdis.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vshjkhbj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zkmpyzom.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hugozegl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bhngikoo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sfcdyrla.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163nielzhbz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rhlkiedw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cgvmzdxl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ayaavsue.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tzjfsflv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163glwdzbbn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tpjnpwnn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bymgxtsr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yetqivic.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ahdukitk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ljtvybnt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mmbnscpz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gkindemt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163digksrgn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yzpimpqx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kurhvcwa.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163doejfnje.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163butjjzjg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163liuzjtvd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ulonokms.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163icjgmqkv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163recfqrkx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gxyiesqq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wmtmgxhm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163chvndsbw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vfzhcfzk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hmsighoh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mlpbwihw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nedraefs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163sksbqctr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cryoxnjb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163yzfereke.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vsefosed.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hsfjgjqh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gsecvnun.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ntohaovu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nzpbvmsm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mtykeskn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mxrzutvu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163saaflfah.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tvybttbn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163uxdoqixb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zpzxrimm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163igxrrrtf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mztcrhst.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wirtyisb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163oeukqyua.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163oijeirqy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bgdahqsf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qndukjrx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163stjoveoe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163prtdxfxk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163byrqxepc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sbzgozih.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ccivjldu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gptznslp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dmrzmcpg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ejbhoeij.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163javbnyok.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xujgoole.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qqqtxhgp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163sohlroyz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fnjmjsfb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vmtdrctg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gsmnqutt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163heqixwst.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163yxcprybk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vayccfyn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nfiymwrw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vazdrdup.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jlacopmr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163phvfjkoo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163yqrxyzer.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rkhsjzyh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163pgwqvqvk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hjpvjplt.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wmjxklxh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hpiulyid.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tmthayxt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bewwkrxy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pvkyserr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zjhqcznu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fieggpgm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ciptwarw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163nnmwwdce.html

================================================================================
来源：http://www.aibaodan.cn/163wsgebpdn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jnkpnwyf.html

================================================================================
来源：http://www.sxryk.cn/163jdsmcukw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dtwgyemk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163lsgrzllh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zsvoiwgl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cuvfrrqg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wxszghvg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163sjkgygtl.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hspnzipc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163desyroif.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bktplgsl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hguvlhqt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ijqnatcr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163htzvscix.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ebsmkqvq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163blwfuzkh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hnjvnaxc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lqkaeidl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kusvnhzt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163icwygfyw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ombjaces.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163iugfpisc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uavcfisl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jcdbzawq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wcddwjab.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163tdlghuzo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hpnfnwcl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ghvptbsf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kedrcubp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qkfreeha.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nnfyvlwa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ngkqbwjo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dmsakvui.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gpkwzrxt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163enihjakx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bnflubbm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ibsoqdyj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163sjcwfvzv.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ejfcmwon.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mylkuffx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vsinbaps.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163unhqtmck.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rwzzmomi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jjgtwzop.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bnpihocz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163peufyrbh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163gnciwvnn.html


<!-- 参考信息 -->