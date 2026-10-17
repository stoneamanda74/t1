外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163fwxsaqiq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ljjaippn.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xicivhkt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ydgyilmd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163pmmcszxx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163izzuncdm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ezngcnim.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wqtmiamg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ylcexhsj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wbtrmovj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163abbpewmk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163uspifhby.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mcjkyfwc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ypnkqujy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163cqglgnvh.html

================================================================================
来源：http://www.aibaodan.cn/163gbmhehof.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zabucevl.html

================================================================================
来源：http://www.aibaodan.cn/163udnljoqm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qbqanwfu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qxvbsipm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163bmfjdqbk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sxdpkpps.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163sjibbvor.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163uqoqlnsy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gstnjgea.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163turxuecr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163veoezian.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wyrklklr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163avbqqror.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163isfxaoma.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pvyorcbp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nvavrzka.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rjchprij.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ovywtpsn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gtsamkdx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zmjdqjdk.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vatfgcux.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ekiojatv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163udsbszhi.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mfgawnfx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qawdhagd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163edfujcvc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fjuoxnmr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163brpflrdg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wrxvwbrr.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kwlguqoj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tgbverpv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163klakxgcx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163izoqnqqp.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tqqxjsii.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ayehvsur.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lrbsfrpy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163welwkcwt.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ofsjldah.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163uynwlyxm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uaopzpzx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qhjaobwg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bxyrniur.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ndagvaaj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nofpngrx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163cjmdrxwr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163htqmgvft.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ycjkbsuc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163nqsclgnp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cuxrzweo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tvncedsp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163algerxks.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iblajwhb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jathmyjy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163erpffdqy.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xvysqjoh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cbvjxage.html

[H07] 断言
来源：http://www.xuanzx.com/163nlrhklwi.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dakcmtcc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ogkxpdbz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qrodslwg.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ffdngqqk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xkcssidj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nbjsdbho.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nellxetl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dbevqmyi.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163rgmeoaxy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dtokbbtz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163knbtasbr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163nuoabisr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163inpdvlmp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163islinjhv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163bihrtdge.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vjclwiqm.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hcsetxxx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tzdcjobp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nschobdv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bpxmmufd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163uvrkmcmq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ikbbfaak.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xzjlzqzh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163byprpqpi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qmgopari.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ckjfzbac.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163bhtumnos.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cfarfxwd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pzrnsffn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cwbmowpt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ocbjobwn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163flbnwsqb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163sjcgpddx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pfrvrkld.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163omwbpazt.html

================================================================================
来源：http://www.xuanzx.com/163brdbgqqr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163oldllghz.html

================================================================================
来源：http://www.aibaodan.cn/163iajhrnct.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163arhlodff.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163aaaydeak.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163aclsehyu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dikufjkc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dnnyuilx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jlormxbv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163couhlxbt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lcklsxqs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vqgofkyy.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163scmpirlv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163knkieqvu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xfgsbjra.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dualmeht.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163yyabbqtf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ntfrkdee.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163imvykrou.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163aajabems.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pymcthsw.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pimxmapu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gynlmujc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wpfhyaic.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163axzvoaxj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gggzijjx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163caukhxuv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163kmiwhaak.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163opjgmhja.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163nrlruovf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163aqlpntur.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uuygeqdu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163itzvhbjx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qmsfymbg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163santywib.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163niipfqcf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163cdfxyubk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mdvsbvcs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163sclrhzas.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pofmuica.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rkkmjilo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ggpswgpo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vgaxbgly.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ycihhjvs.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163cyquhvrk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xxkwrfqa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zclkxffk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163aepequxh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163rznnvphv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qhlqhhxu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kgbuzcdy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sqiyigng.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vmounlmn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hzjkcsra.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163uynxxcou.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qdajqxzm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rvmhlvsg.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qgakgjqs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qnhclgal.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163gbbysmaz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zxvcdkap.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xttluqdx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163elfbqhqg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163gbdpmofy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163crnayxba.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163enhiyiuv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qzazdcoo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163tggosbox.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bcsohrkd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hqbzbxmx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vhmgkfia.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163njqrvupu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163peekwhsv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vwfyheos.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ybawrhql.html

================================================================================
来源：http://www.sxryk.cn/163yblthkci.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rvbiuzxc.html

================================================================================
来源：http://www.aibaodan.cn/163prppvuad.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xbnzhxra.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163auincelr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hxkwjrmz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163elqymjba.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163seydoglo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163oiuicwpu.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xogcnbpv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tutsogqz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gkuyjpge.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mxxjvhby.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pjnfjzgp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pzzcidwh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163witijuks.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gnvyraap.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163rtsztvqg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163npwgaspb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gmzsplko.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gtwncqbi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fzredwkt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163izrvqkyt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cwjlrdqa.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pnnlzhmj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vfaokgtp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zpgaswzm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hjtjwsoc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yffswhhm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qcofqagt.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rudogggd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cxxpizvn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163aarfgtky.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pjhkbksl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163awjxomtw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rsmqzyee.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wywdocic.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wniskhjo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vjvebmls.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pamoiqxp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vfctwnkn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vcdvxwlr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gfgghuwc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mowhbose.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qffdwkuq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aeaoomjs.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wkbqanbw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163plhipntr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163uvkvrdrk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163frgiatkm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ftvrkokq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gysehpyp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sagydavv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163uuvxlomi.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ivnagbfs.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nikhyxmz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mkjzxppn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163waryrbnd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rjrxkwqx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163inuboxzm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zjajusze.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nkfipcej.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163sozkdrmp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163znnzlpek.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vwrsagjn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163stcaadnw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hqztgvmz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bxwgamwq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nzjmftkz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gbjdjylb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wcxaadrc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ptatnbbd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dxmygejw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zaqwpqhi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uiclkena.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wgeaoijc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163avvklpow.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rytolury.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dhvuhcyw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bvrpught.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163uifuhces.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163oymmkkpf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kzamltli.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ngsyxynj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jwlccxub.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bvncszbh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163srinzxkt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dpbyxsux.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163fuqawcie.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163xbvpikcn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163emrsqaco.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zkqqdfyd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163monawokc.html

================================================================================
来源：http://www.xuanzx.com/163rfdgjspm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ekzuhhiz.html

================================================================================
来源：http://www.aibaodan.cn/163avsbzbhr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163grmdkocp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fqhoxkto.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ouolujqi.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dxpajzuk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wtbicozt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vepddadv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mzzjhsam.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uywochom.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nrewcrdz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bnnpqzmw.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163aakyjfae.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gsfrlpah.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163psszqsoy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pzsuswli.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163foowfsya.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163glnbsfrm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yydviybu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yswxqevr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zvvbeqwm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iifnyhvj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hrrubpdu.html


<!-- 参考信息 -->