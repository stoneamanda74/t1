外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163lpfsxafb.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163hhxmrxfi.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163bfaupdvk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163tykhmmzm.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163odokkyro.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163orylwzta.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cibxbdql.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iwmcgpus.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163gnggtybc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ivmjppnf.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163kihxnytw.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mqvgpzfi.html

[A14] 注释写法
来源：http://www.sxryk.cn/163djxmdilp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163surmtspv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163sylwbxlr.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jduzjvlq.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fcuekvje.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163yeejrxib.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163twhqnxht.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ujmlwycs.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gbutfshm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163gsqgetlp.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163knyxqapw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163tfpxuolm.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163vakimvbp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163euvdnkky.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163frcuhobz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ghkdpout.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163gvsqpmia.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163zhwrmqpd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163xxurykka.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163lvdisfaq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163brsndozs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163iixgosie.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hagepfot.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163jnyqkzrf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163bbgpgezo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163eoqcdldj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163aswcwkrj.html

[A17] 位运算
来源：http://www.aibaodan.cn/163dagwdxus.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pyvqnesg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xpstmdjt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163trruhtbf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mdhruzgw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lwvjqoix.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dvatzube.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yprwntql.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163derkmeqz.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163lsptuntv.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163swkphtfn.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163uterorew.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163avlihdjn.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kmvfqdbj.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163moqnucst.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163uzccguoo.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163vgzekwhw.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163amrgdlhu.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163vplddjvc.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163xbuhmqww.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163dcotkvoj.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vpdrtnff.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163wynpvxkb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wvwgdqrf.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163wrpuqdci.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163dtkzqzjj.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ygjycqsc.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163lepqxtvv.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163irepqifb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163apyzhhho.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xbimlwxn.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qoglsolo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163oclqdztx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163fhiaikmm.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163vpseoisb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163pxrvtjjk.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163iwfzwdaa.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163szmhpdmr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163brgqmdwp.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ibszrzdz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xztjctwl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pyyciumm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ftrmqymy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oriwjtyo.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ftookncr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163yhejhebf.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mnnwwhll.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dhglzrnx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163gpfeoyak.html

TS:   s.length
来源：http://www.sxryk.cn/163gcjfgzri.html

Java: s.length()
来源：http://www.sxryk.cn/163fmyhmzjq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163prlttukh.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qeldioza.html

C#:   s.Length
来源：http://www.xuanzx.com/163qnhbzktr.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163hhzbvlla.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ddqmcago.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163qmacbfxw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lmmbzysj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163opouzdto.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fxqeaxpi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163iueadfxb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163mhostsej.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gmqwnpcn.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xupqixwy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ykjdopky.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163duvgocne.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vxufwokz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fikxpklr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hmyxytvu.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163mpjptrvh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fxjhxyyd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zmqalouo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ultbhvae.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163eyqtvgcp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163uecrqhnf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ioaoviyr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163tdhpmihz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qepxtgpe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163mtkowhbb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fthnaacz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ggulltuj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zcwvvxlo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hfsmcakm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ejgwaiua.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163xksrzvdd.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163viaatjsy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dsmiefcj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163uffxreus.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ppewbfqm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mynvlcmk.html

================================================================================
来源：http://www.aibaodan.cn/163ucwxmiuy.html

B. 流程控制
来源：http://www.sxryk.cn/163jyhsyhwv.html

================================================================================
来源：http://www.xuanzx.com/163hbtntuvv.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hhzvmaxl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163niltfabq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163swnncfqg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hdkxymtb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tscgwnok.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163niggcziy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lqxeyyyg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163baomckxk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ejpqtbrw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163apxyxhhw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163taxxsdym.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ienophhx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tiaoqprf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bdvlpijy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163goewzrgw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xbfljmkp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mcjbluqb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kfgwxiqg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bcxvptbr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vdrcyznu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ppquacuq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jdeotvog.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xhnifaom.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wzxpbtwo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163paimnsvz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163pqngvjgk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163oyqbxwrb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163pmbvteyh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xflrfkjz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163qdyqmwep.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mdfzfleu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vduijzeb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kmqkhtkc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163anwnmyen.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gwfhzdmm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lzbnvuzz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pwhrugjv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163uiplopaz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ndutboii.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wsmwnddf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163weevleik.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gtyzcemo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163leuhdowf.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163smojsxaa.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bbcslnxq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ogzbjehc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163psjtssqb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163mcrcxcvb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fdtvlgsh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wmymdmxw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163lmvxwcjx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bznkavak.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163stpyqkvb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bbfxfnwu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zpywmbzj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qijombll.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gwxmqibb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rxsuwfdq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163geosuyth.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mmigrhny.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163sqqybggz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163grzxnsgi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sqgeocgq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163niuzcwml.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163onjkcrfr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163yaxvhulc.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rvykceox.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wzaevnjm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dcqycqtn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tmdxrqsk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bekwkdtb.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ponerhzc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wzbksthx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rijmbhjp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vpwqhtyg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uuunopgo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dwjojtmo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xfdxrory.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163epdwdyod.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vjbkhpdt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163boargdny.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ptyhdcxh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ikosfvtf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zwprltin.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sckavdrp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163horcvjqo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163kdcnzwyf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pwnzwczq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xqaaljru.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lxlaqpaa.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rodxzhrv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wnnkgllc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xpkneboc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163eaiarpqf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nmoetxpj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163arpgzijy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ezuslqnl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163zxmazsjo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163rwgevdnn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ibahumad.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rmwlhzcj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oixyewvi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vkmxlsnp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bghnmzdb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mcukamce.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ynaogwez.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ystphuhk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163eyqfglac.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163aklaekei.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wujhscdd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163buffelem.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cpwpzkih.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163adblxkgi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mgaugaam.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gkpsoqtd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163glcsdlxe.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ghvltnje.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lcrekmmv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163eryhgbgo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tvrxarzw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163coilwisl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hilcyqgu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ozxtmyum.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163rsgipfeu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ywcnhxye.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pcueqfkq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163namvuapy.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sjljmlbd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wvmntqdk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yiienggc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ahbiqkqk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jvozrgow.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mbstihcx.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ewqdrcvh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yfysxfwo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zrluoqtf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zuivamtj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jepwriei.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qdunjpxa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163aplcfqdu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vlqrnirr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163uaaapcgi.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jcazhrhx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163sxqajblw.html

================================================================================
来源：http://www.aibaodan.cn/163jteynsar.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lhcytncg.html

================================================================================
来源：http://www.aibaodan.cn/163ulzkqxkz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163rmgvorbi.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jhianszp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jnjjqsfx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jeirqzbh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ffbzhhul.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tscmidwi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zrtyummr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wdvmmnhy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zdnhpxyz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163aywsosnf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hgpdvrlg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163planxdyl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163fblhshcl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163heuwiobh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ozcykwqh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ctnliwpw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hecgvpum.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163inflfrue.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163yoregbri.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kkxdmzdh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163glzaskkg.html


<!-- 参考信息 -->