外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163rpaiuimp.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zoykxspq.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163fouzffmg.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qqnkumoe.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mcvqhxtw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ifynzgtq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163icuuebxd.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ippwemci.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gissvuvb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163jplrjypp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xqekrjbn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163npsbhnzb.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ahsynain.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163pzijfsjp.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163cfggevno.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163oixtxjge.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163rwwabnmz.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163sqlwhbrh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163eeqmvhjo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163mnewxoty.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163rtasdhis.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163joypcmmr.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163njzwcizn.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zpqwezba.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vyycayhp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163iariszxf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163aqaanclg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vvsumspt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163dsvpucut.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163qomjitsr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kasxeqxe.html

[A17] 位运算
来源：http://www.xuanzx.com/163bgpylblq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zwbwtvjd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163kiwlfxtd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163squafxnc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163zvpflmow.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kfcndpee.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eafccwqf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bddsicmf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vmzrrcxy.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163oekcmlzn.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163dydnmpur.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163culdbeix.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163sctfurmc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dmiiifew.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163miwaiwfk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163jvbeumns.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ejtslrxq.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163scjnpbbx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163zqznrqnr.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163pwuzeebm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163fetkupmf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163pqjgzccr.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hsssiazb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wdwtqmfj.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163dzvzalxv.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163gdgrmvmp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163rsyyhyxu.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163sbirqxeg.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163uqaipxlg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hyznoqsh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163fqhhaara.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163pcbyrqqm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163cvyxswqb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163gmllzfkm.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163fpqivaqr.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163sdwenegy.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ecmutcdp.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163zjfkqijl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hyxibdil.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163duaryhfd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qtbqdvbn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bewtqxdr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rvzwmosn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pttnplmr.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163kioehdal.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163oyvqtfyi.html

Py:   len(s)
来源：http://www.sxryk.cn/163hsixflrh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rbvbfxfy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ycwgeozz.html

TS:   s.length
来源：http://www.sxryk.cn/163opqfyznk.html

Java: s.length()
来源：http://www.xuanzx.com/163cnxnzloi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163nojhqvkl.html

Ruby: s.length
来源：http://www.xuanzx.com/163mugzxfzq.html

C#:   s.Length
来源：http://www.xuanzx.com/163lgnkljgd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163corqnttp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gwrklypr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163bxdhqhtl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rvmkjght.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tvbotipd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ayglribj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vanstepr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163jfywnojj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163urnnbmxt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kztgdful.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cjdqcqny.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163lstoddkw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vshnvcfx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ldlvftju.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bhrgricl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163jufmhhqk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163eiadjdfc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163dkqljvmo.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163eowtanrt.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163pliqdjup.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163dnaceqsb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wfywcsom.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ejaiwyvf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vdsclzmx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pxgqilvj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163czpucxzv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ajdwummu.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163mdtpbaxc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163yggaatcr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163hvlddwmg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163layufbyj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jxhvwcqs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163dkywdfuk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163nwtwaxvf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ofbvgbsq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163grwaylkj.html

================================================================================
来源：http://www.aibaodan.cn/163rnxeccaa.html

B. 流程控制
来源：http://www.sxryk.cn/163zwezzasc.html

================================================================================
来源：http://www.aibaodan.cn/163qkzcdofs.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163rhdxvbay.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163miljgutt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gdtzcpaj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163plhehizh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nlltvtfb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dcruvfyf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163hbghgbka.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fvzsrrdp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cnapbwlv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163foetdmxb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163dqefjadj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zzlehlpd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sbhueqlb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qywdpwlf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dnaakprw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bjorhfcl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ontmngkw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ckrcfkpx.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163wmfvkjfa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vmfblyax.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163glciiiqy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ixvpamom.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ampmkvsm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rncfwpsn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163xixrtycx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hbsikruy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lnkqjnvr.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gkeijzle.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vxhbyuem.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ekwhbhnx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ztrqboyn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ullslbvw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163qvzixryd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jgurmpwh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163tvzlopjj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nghirlwv.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163bhzvpwgr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ppqmbfeu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163dwurhzfb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163exjlimgh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qxfxaazh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xuwdypem.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163zgddrhlh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163lyedwoxm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hecxnvjs.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dzcnniti.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kdjiqxjg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nqfuhckb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dccmhqvq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zgietmjl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163asiikspv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163iwvmartm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tktkdxmc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163rmhremwd.html

[B07] while 循环
来源：http://www.xuanzx.com/163nbmmxpwt.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ocusvasj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163idwwjhex.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vwzfsomn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hxstsvyi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pxmymmgi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zmhxcleu.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163gqmuyxhr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163abmsapcq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163cysnjwru.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wjknlleb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xphytpzo.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ifzmdltn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gjicyylb.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wqeawuoq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qyeanerq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mcgdldel.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lmmljnlb.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xhzglvow.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zsqqgxhc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163osodiwis.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sjddzsrq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hejsywfg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mxhdjqma.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163tpylfxap.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163epowkeva.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jbveallo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gxvnodzw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163znymasxt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163husbyuwt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hkrbstrp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fnuvodac.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hloghfux.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ammyymyh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gblcgqyx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kqhbhazm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163iwhlcbaf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163acyqxqyf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kcsqkile.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163twiksqhj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uhgktmka.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qnyorcxw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mzgnzash.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163khbwidvf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163cotofjhg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163joaubmrd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ttqvccrk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163olhomnsk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zsrebvhk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fqdllest.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163afpcmqzy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jrvipqsk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163adxzaxea.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hiumoejn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bdtyejwe.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wclgzjde.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163yaolhycb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163raofwges.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lcjilmmg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mapufrfb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nmmnjrtz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mszrfapo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163dwpjevtf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163pfsunqdv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bzfbfbld.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ikvfocnb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163drtisuse.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yxkivfxl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vtwrlnzh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163acfpkshg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163rqsmwhmt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163kwqmzvzy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163isuctsjf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163mnpwmztq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kmodwupz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163olmblhmh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jnoaicbd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mhymddpl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kgyjzjsi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zxnxhjrk.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163kxyoksjw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163efdydbyl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163moosnvai.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jncyxoob.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vkzcaxal.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163uqagksnn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163klenwgaw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vzdbnlsg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rvfbjxek.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163mlmttnul.html

================================================================================
来源：http://www.aibaodan.cn/163dqxpojqk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zfioqdcy.html

================================================================================
来源：http://www.xuanzx.com/163rgkqbcsy.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ygqytzbh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hnckiuqs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sytyqfvz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kbvqqgwv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cnvqdgtf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163urvypclq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mckgvjhg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vvmvwsrh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vbvywocd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163gmqfmoos.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163cpdtocvs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dnghdxef.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163erkrbolh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gjlxqqvq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163uahqwayu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dfxfwlzs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ysayzghp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gsszrrjn.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163iqplfwcl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163oarwodgr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163olbbjwrq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xbhmirea.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163denfcdeq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163apnlezgo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163mgflaefk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kyiaasuv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nzzltzdx.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rmmascxs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zifclwsx.html


<!-- 参考信息 -->