外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163foyekneb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163dwbwylgu.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163srnytthz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163tdgxxgzf.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yjzbfssg.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163psezlkrx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yvfpucdr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163cxuqfomk.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kckshpul.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ixnzonjn.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ubacagxt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163asivdhww.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163xfoggnbv.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hnlqgnty.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163urfjwmbj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jedmyhkd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ssxifbxg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vilbwknl.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163cciehsmn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163sglfzpfh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163rubaqwxo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163vgomdady.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163faoyrddm.html

[A17] 位运算
来源：http://www.sxryk.cn/163yrtrpduv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zamnaubb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163vbevkytd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zwmqvhie.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rvihxpfz.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gwshjdni.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163alvcyqyq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gcwhgujv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163twunmvte.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163mamoearh.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163oavkzzml.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hvfnftqv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qkhazgpo.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163iprjchkl.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ftivteno.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wxpgkpcr.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163lshnzlht.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163lelaowrn.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163kgxzuvyl.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dzulesmw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163nszajesx.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ffrmlrzu.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163tlhrlwkg.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xkqrxfss.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163znmvnjki.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ffsidqow.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vkrrolro.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163zxyzopbp.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163lwrbygiy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163fnlqsvtp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163bbtytobi.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163lzlozdki.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163oubdsuuw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163duhhtcou.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163mvwcbtdv.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163kwuzxpyu.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163psvxgtix.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163mophbliy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yptbmumy.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ollyacaw.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fyucfpsp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ivxrlgdx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163whucjuca.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mnmtmksf.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163tcjjvezq.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163kvsgxgok.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jcfbzkla.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kikaxuuo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163uucwwlhk.html

TS:   s.length
来源：http://www.sxryk.cn/163ktcfvcpt.html

Java: s.length()
来源：http://www.xuanzx.com/163lzylxozv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163xgogavbw.html

Ruby: s.length
来源：http://www.xuanzx.com/163zroijrro.html

C#:   s.Length
来源：http://www.aibaodan.cn/163xoqwzxsd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163gprgdatc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163imtqhcjp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163yytiewhx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ygbltfos.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163trfgygjn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lybrpnew.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163bhgnkygr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vfccjudf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163prbqilcu.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163fkbjzxkg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163sqdjacjb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163syuxcubf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163obuhsona.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163gpjimfws.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163nqxxxnph.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163uaualmen.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163tvrlxwkq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163khujwhvp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hzgqgwlq.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163isqkvrvm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163vuiwgipn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nhpnohms.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163tkvpjwhf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rczcoisw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ptuomdbl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163opgtynpw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163lvqwaosa.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163pmvqtloe.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163hremvjay.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ycsgdwrd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163annwxqep.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163sjaricxt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163pwfbzcwg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163cmonhovx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163niwqeuos.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163shypkljb.html

================================================================================
来源：http://www.sxryk.cn/163tqzpjpuj.html

B. 流程控制
来源：http://www.sxryk.cn/163grizsrju.html

================================================================================
来源：http://www.sxryk.cn/163ebcvvmsb.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ukfrkzat.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163cusoocya.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ysnuoosh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bzyorntu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163msujnuwv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163naslhfxb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163nsoijfbn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163onicvkis.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vfbdckec.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163rdcladko.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163mvwwbyyt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wwmeecyj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tdkfdnjo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qcadndaz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lorghesv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zigwuylv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163pbsadgtx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mxvzxmac.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163byrzjquk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rftkiovr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163lfegmhof.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mzdwnetz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xxkznsiz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rtewufsa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163xjqjuntk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163smaeesgs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rmgdbuxg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zmxkrekw.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163tcclqvfg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163indtxdgk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ylpmfmel.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pxtdzidx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ebpywkcl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lskxpsnt.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gyertilw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163boorwgxt.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163muvavuoh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gdktzxkx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kfzwpzkf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nqjtrqmv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163inuvtrgi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163pgtpfspe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gxxjponl.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163huvfrvdw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163otqekgdg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ipwiruwj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xyypimny.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mnvipctm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gfjuctax.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ndivkzkz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qyunrqyf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gmvuaniv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vvkwkmqs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ysugxhiq.html

[B07] while 循环
来源：http://www.xuanzx.com/163pkyqqhov.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163vslfrjul.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wybklboa.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163klehhmyc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tuxanmyp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qtneuzhb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163viazvgyi.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163klxbgzwx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jgsaoiwi.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kpcurdtv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163imjqosdw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bbokecsx.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aeqeblfo.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lhktcvbv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mdhhktlb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uttasipv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vwnpgios.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uxortkfv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163eokwwggn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163tqgkbfbt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vgijhcom.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163egiartbl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jqfcejxp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ofbpwcfq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cpnmfzwf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lkvxyxcy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ukgxvhxd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163flskowcb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vuxxwrcj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163plmkfsjs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163aajwueqz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163sbqqyuuj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tstdllta.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zqiclkmt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163mgjiehwb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vejuivoj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zkabqjkn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bomehexc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hxqdedil.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163iteafovh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mibctpqj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qstokcec.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ymqamlsw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163isozvzrz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cqzodfwh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xrinfurr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kojnpcnq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fjgooowk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ewzvxhjx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kcygcgzs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ewzefyew.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wmitpcpi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mgnrwkas.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jjqxlrrm.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bwyndbog.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jglkrcoz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ooimqecb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xoadjhrg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fimhvucr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gdxlycnc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jqolvpil.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cnagdazb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163juhfgpos.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163onqfusrj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mtgzbjuc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163btapiije.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163speoemar.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sbbgwfss.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dmwvcujf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163awtizgoq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pctltqfx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163owmgoauf.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zaqgmlzn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163sqosrmlg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jgumefdi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bdfidhfg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pwokcwsm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163uliwwglt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163cvwbrcfq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163llwdywoc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ehprkrjk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fblzgsvo.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uozvvwte.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cjzbnfzn.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lxieyqjc.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163brffvkpd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rqgxuzep.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pvgezxqf.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gttxmqyc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ffsylnfj.html

================================================================================
来源：http://www.xuanzx.com/163rimgfirt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hegxubpc.html

================================================================================
来源：http://www.aibaodan.cn/163evdwepss.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tcgcnykq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163emxwtlvb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hihygtdj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163stsvhjpz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uzioaddq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163inalykhh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ozkimcie.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vbzzqdmh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pogxvgsl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vpmpzftk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163sgkwenzk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wawzmonn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163sfuhutsu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hvjfnmej.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ncnsrnbh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pmikwybx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163udlhhpah.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wcxhbomc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bfjuqvsi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163cgdscojp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jvrcdkfb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163feskwayx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wylnxxmx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163fbecfoxe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kinbxhlt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xicpqknr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hljcvogi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ijolcwre.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ytndfquu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vswvfbre.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163iimcngjv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163djvoivzy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163mwukctfs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163drdjiuim.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yhseustx.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gzgzmkbl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xytirhdy.html


<!-- 参考信息 -->