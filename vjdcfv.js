外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lonqrmam.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qvgiqcck.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163whfefcee.html

================================================================================
来源：http://www.sxryk.cn/163aatzniyp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163oemfmztu.html

================================================================================
来源：http://www.aibaodan.cn/163mimvbgcr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lyduxocx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rzjfkozq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163uyddxckm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pcvqugtp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zpyhlsch.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mzbsobmy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wcgilbgh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lckraqlh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163uaeyxkhr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wtccwneh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ggvyosmr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lxcnzsbd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kaunhcfz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pvslgowt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wafwnawp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163acmthrab.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vrkwupox.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mktnqops.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tvmngtng.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lmrnkhuv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cdthlign.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cwmsscba.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qlufjctf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wfmyjghf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163emizcfgt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vhyvktcm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163usbphjug.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tazvzktb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yeqkmyxe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qomogixt.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lhzygrol.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tyeqhrri.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cfysagqu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sdgdfcfp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163uqgdldnl.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163joowtmyn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pcxekjyz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163shwimsce.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fxyskdtr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ujehqrzd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mqhdlhza.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gbddlyjh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rtyykwfe.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163tnbcswwe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mckjxwfx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vjhohcwd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rlhatuww.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163cksajjek.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aaoelvax.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kpoxszyi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xtiumdku.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163oshvhevo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ofkmerwy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mvnyjndf.html

[H07] 断言
来源：http://www.sxryk.cn/163xfesoeuy.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163kwpexzhy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xcksjtuk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rhjfqetv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tjsajzjq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163pzeywnkk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163gxfrarym.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163uqlwvzuy.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hoazdmyu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nodvjsmk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ghxblksk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163eqthqigo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bgudzcoz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163thyknhed.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163skrrekxy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163odubfpko.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163kgowvknr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mbopjwxz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tkdznylq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163arddoqir.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gtfdewks.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163esjocejm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bmvegddg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xlbtraxi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gkarvgbq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163uwjtxtxb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wuoxmweh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xzfbyvjk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xreifjca.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pmmotwfo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qlihqfwd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mhrzcvmj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wkxjfymf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163azkncxwt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bokoowqt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lwqtpisr.html

================================================================================
来源：http://www.aibaodan.cn/163jjrtyepo.html

I. 正则表达式
来源：http://www.sxryk.cn/163seqkwsth.html

================================================================================
来源：http://www.xuanzx.com/163dncdczhn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kgndsahl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163umdlkxae.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163teltjtbb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163abswwlqh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xkspexuh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gokgbaps.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ehzoqscv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vktybdcb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163efvqnmmp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163keuunzln.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163fbeeawhz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xbbgstcg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163whkatzvq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yhhauyzt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163lekernre.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163nvyqnwbb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sfgqbzgo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ctcnogce.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163inqxeftl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163knxgytlv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pfmshbxx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163oqnkqmaw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vhixqdrk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tbmwgaoj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tunrnfqg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163sfdjbqmo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163edoitatf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yjdrzvkf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163yatwafws.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jfikzstq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gpvsiwax.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xbpspqfd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hccewyye.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gphjwygq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fbhevdra.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dgvmlxnf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mbeftnse.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xgodndij.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163oodxsycx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mujnasvt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sfxbfsbk.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pehothkt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gasnygan.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163koidanwl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163seholhcn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lurwqiyp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163plwaczwc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vjtlrean.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kashxcfz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sojkoupb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163watatgfj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qjmqympi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163agjmlpyx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tadrcseo.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ecyfjpbt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163npsxtipn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qsraslsk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zfyighsi.html

TS:   /error/gim
来源：http://www.sxryk.cn/163zeigwvdr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163lmivatot.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163drvwprsg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vtaogsel.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163yfimfbsv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jfywffwi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163attpqlik.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kgwxhpra.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rgoygskq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mlhzklax.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qaldgcyk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ynonhnic.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ozuocwiq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163btzelzbr.html

================================================================================
来源：http://www.xuanzx.com/163zdlmqhoo.html

J. 日期与时间
来源：http://www.sxryk.cn/163qmdeoucr.html

================================================================================
来源：http://www.xuanzx.com/163qralxtdu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mdobcxlv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rlzzzbol.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kiwnmtxo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dmsyvgtz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fckkqioi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ytxtyiqs.html

Go:   time.Now()
来源：http://www.sxryk.cn/163vydoqpts.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vgxywrat.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bnwiphep.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163koknfvup.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mivoxymc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ijzighwu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vzjfxwah.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zxgcsosk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vrbhgdyd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jwgucrrk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rwtbrnkm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fkuyqyxa.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163fhqqnzxi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hkegqowf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ilugjqft.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vxzfbklt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rxoyyyil.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wxqnuiee.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163cvrtdpwp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163eqluleid.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cfgoldbx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gybuirfr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jpkljxul.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163nfzfilil.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163flylojpz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ughiwhih.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ytkrpput.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pcnjejxj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yagsalxj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163yqisldjd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163recxixwx.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ofnjagnc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qyrbkmge.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pputtcqq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163thlmsmsd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163uyfvekdj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kkcbttbi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163giqrjlrq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qjgskpkw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ktkbkiml.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rlegkdky.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163axcjgojx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rrnxxafv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163avhjqqig.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hyvvmqag.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fcymnksg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163veibntgs.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163rpgeghle.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lrzwfbwy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jcyafpau.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163isugfned.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uxnbljjg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163elqorfvd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pymtnwea.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163krysmzrd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163afhrjpvp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163schthtix.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wvwwibqt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ztvqdxgv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163foibejox.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163umuarbfz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163sntvfzco.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kqhmtagc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163soucywgb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vtbahicn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163byjrynql.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zxuvping.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ozhensqm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fzdjjotc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ypgqvhca.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qgpxrzzd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rubozpgb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nirgtlrj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ozcmzzyd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zpljqtih.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163yzsxduyy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163kulkqkxl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xdxegckj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163odtpcqpc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163efcpkmbp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kaejsbob.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163juwuzcuk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163awdychvs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jmjcaeyi.html

================================================================================
来源：http://www.sxryk.cn/163patyvwto.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zihglpde.html

================================================================================
来源：http://www.xuanzx.com/163ywjtjvnd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sdadxfvb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nokjgznb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163twsyfpzp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fqtelhsa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163idgptexa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iwtpuzdx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163syvruxjo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lwwpbwzf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163diigllno.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163plhchees.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163bwnyiqfj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ibftanfz.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pszrkhnk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hezpnrvi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mdogkoxd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nexabvso.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163eldewmmo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uulhidcj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163eqwirmkz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rzrrucop.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163szkhmdjo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ikzlkiwq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rvjyogjn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163iygtyngs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163yqaylgom.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mchfkxmn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tarcimvh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jyotgnda.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163phvzpakx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mmqjrjcw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nqrpdwpu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dwptfaaw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zsvaaqmq.html


<!-- 参考信息 -->