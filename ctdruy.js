外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163qziadgdo.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tqrwixkm.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163twcpjzfl.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163frlhnsaj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163xnhdovjy.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ognammtz.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163jacxqhvn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163albovfbo.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kmfgrymv.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163mxgqptgi.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163phzhyucd.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xfhomjzu.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163sllkasoo.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sgxgiasm.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163prlnghrr.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fobqupec.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163gubyjetc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163sapgyypx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163sfykymlt.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ijpydaev.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ikyujgzr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163kgzmngnf.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mpqtbnpz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163rzeberoc.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rjvqwlfq.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163nzndjega.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rofeamkq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163hxscxopr.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163fuqiztly.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lfbdhnyt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163bdxqekdn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163bfxruvxu.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163psdwnopo.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ijixuzci.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163yrflrrmc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163xuggsuei.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163icfduebf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163pfsdswej.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163nhyliefr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163qmqnqdss.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xqruyawh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rshiyxkk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163rmcxopur.html

[A17] 位运算
来源：http://www.aibaodan.cn/163btwhlspt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cnybbxmm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163unzqzjrs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ujvbwrsp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163rowdzbac.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163spwecamy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163heiiefjx.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tqpiegdp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sdzxolkw.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163cilroxsu.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163iazjjihk.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163utiuchda.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jzhjldiv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kmekzogq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163badeavpy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ejrbtzmj.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163rjycgvep.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163xyyxfgnd.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163sjwlehqt.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163uxzkxpzl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163nzsjhxxh.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mdsrgcql.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ecvnslxu.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163bdethyuo.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163vjsdqyjf.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163qiwevzoj.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163iidlzeab.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gnefktof.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163vbjydxlx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ijnqmcio.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ykypwjtg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ahlrymbs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rhzwwhvj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163cmxvnrek.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163lmezsivb.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163argshshw.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163hfepqkxt.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163sfogyevs.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rsnefadw.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hwhxebbu.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tovyftqs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mbnxzzpv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hvcfjhld.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ixgygjdi.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ojphqlce.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rujaiydn.html

Py:   len(s)
来源：http://www.sxryk.cn/163tinesltz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163opkgeogp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163qplikeff.html

TS:   s.length
来源：http://www.xuanzx.com/163ufrfhvdf.html

Java: s.length()
来源：http://www.xuanzx.com/163bjulahjs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163wwtnlekl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ecbvnbxo.html

C#:   s.Length
来源：http://www.xuanzx.com/163teqgrcwx.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163dbgcxigr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163tlskfnrx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ufqqaldp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163obgkzvqe.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zxraepiy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wnodsbcz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163qziishxy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163cbwhjivc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vybncoln.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ltdruqxq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163mbrehxha.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163cstheskt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163swfnaqhd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wbndngiu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163pbpunxxo.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qymridjj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163tpaezklr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zxvumquh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hfjlbrtj.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163iaoaiucr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163fhsjaxuc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mdymeunb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hwdopair.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fwoetrlm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163scbcipfp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mxuofrdt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hituedad.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163nvzfcsah.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fyjqiwok.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163grcptwyf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163wtjkregg.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163uxvzkrvz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jhlwlqih.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163pbpenvcy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ghhhqdlt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jgbirfza.html

================================================================================
来源：http://www.xuanzx.com/163inehokuy.html

B. 流程控制
来源：http://www.xuanzx.com/163ifvsinyp.html

================================================================================
来源：http://www.xuanzx.com/163enpdpnew.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163wyxjfpiu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ujhuzlgl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gyilgwpg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lnkzktzc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iwshkifv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pxumayua.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163cvpmyonf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163mtejnldi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ziacycgr.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163aquvfudz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xofnuwcs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163uzfxputl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vxqubdos.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163awgjlqse.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bgmxuxtz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fyvsgsyx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163sqfbynqs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fgcfphvc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vnlohdiy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163udhlxcri.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gggrtjhh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163cakksxip.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jcesfkjs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163dsmjblwl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163medgmpmb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hjfajnuo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163iwtdkyik.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zlrogeyc.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163regequuk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163srxspwaq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fxlrhvnz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kajjezhc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qkohlcpv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163zrsouxcf.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163joaambfx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xkwmyetp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jbmvdmkp.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hhhyluoz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163eawphwzo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vmbobudc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yqhdvxak.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163aqekmkvb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163okdhlzen.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163swmdwzdv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163cgpmtrww.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163cgfvezpv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bexzxuxm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qljprsnx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lnumihur.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lxavqtap.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hnibbmht.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dikekjor.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fkvdhxdg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ldxnppem.html

[B07] while 循环
来源：http://www.xuanzx.com/163absejbiy.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163dvtgrrdb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zqcamzay.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kyapeaee.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yagfzric.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163slhwlblb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ouysxdcd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rnytkghj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rbowxloe.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163aaljcegz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ipscfmjk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163kkreamox.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bdfyzlot.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zzeutojq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163urmczkfg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lwulycvs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bhygdvye.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163asqpkqie.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163meugppkl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163wovgffbx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dkzfejtl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lobgquhu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vxdbsoeo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ajzoljtn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pucxueiy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vytilyhf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ueqlyhmc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163wndcnluo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kivzybye.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qhuwfqpy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163harxwkgf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wnzshjvq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163qsitjvph.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163puzqzjyn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163evsyvaxs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rpdjtbbk.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rgpsgici.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163povrwmex.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cshwdpmq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tcxwqyie.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mnyffvzy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163lrizvmlb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163rjizpkbr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163azoqyrld.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wokyiroq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lhfyurhc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xzeybclw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jndgixit.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rowomxjt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qxwicyqn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163czopttcz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xubroric.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vznriohp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rzndvzbn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163rkzdxhdt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163twjhglek.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wouzmcsx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tozsvoos.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mlzrhuss.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163objbdpyd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163acbsniog.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163knmmuhgc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xypehrvm.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cyyfhjgn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cvsjqxnz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163sygtccqf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mmpbaubj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uopqrcbv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ynvcvczr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cgxepyqh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163clrsafrf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wfzscpce.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jqtpdtfn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bzvuvspb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rmylxkkd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gcyonvml.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nbzyigqn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163epgxgjzt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163smabavpg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dixyhzvb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uropqqeu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ypgbsdzi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wyjzpbcv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163tcamidwu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163oomtecin.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wyvqicfe.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nczsrrlm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ldrlelzp.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163littizpf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163grbdbnqq.html

================================================================================
来源：http://www.sxryk.cn/163exphykcv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163pcgupcac.html

================================================================================
来源：http://www.aibaodan.cn/163aknllhzn.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lgureiax.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gsjpiypf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163drjecjar.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kbooknxc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qxwcrtsg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163blkdetho.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pcewcueo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163jtbdmxdq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ognmueto.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ozthgtsn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vjydhaae.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163cqqiytpd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ljquigkz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dztilsnp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163igjgwlyy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xxgwxqpf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mwoumauo.html


<!-- 参考信息 -->