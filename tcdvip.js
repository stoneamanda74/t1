外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oggjvdwp.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163unwnuhcb.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qjhehxvj.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jzssmjpc.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163tvcztkjl.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tdlxwceq.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163cxjtxonl.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fomoxmyv.html

[A14] 注释写法
来源：http://www.sxryk.cn/163emshxtxo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163tfjfcqmp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163bhzuuxhc.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pmopknwg.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jnotagbk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163rrivahwu.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163frkwblxr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163wgnqskjj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ikqotaat.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163xfgkfemb.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163xddxlrmr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163hqyqteit.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wragomdu.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163cnzfobxp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163mcyyeuzz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163sjcilyfk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163qrdxcvto.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163xtbpytot.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163tvzjhswf.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163bcznmllw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163toonlyfj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163blvzylwr.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163svjmqlea.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ridwmywg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163tjanxyzx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163plsgohnq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163xkfekpvf.html

[A17] 位运算
来源：http://www.sxryk.cn/163rebcbboe.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mjtlyzlk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163zzymdznc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ykppfrgb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ndfqhkwp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vqhhaipw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xvkhbjte.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xerrjnlj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qtinsblk.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gmyaurai.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163xviczubp.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163lksmzlph.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163fwwgkzsb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qmvjalkx.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wwrtvhir.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163sktkqjtb.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hrjiqtev.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163hygbtwyn.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163papgatjd.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163kejcokgc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163eobjodbw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ogltyulk.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lwnbwpph.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163svjvbgkh.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ukfpngty.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163mkalwbys.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163gzjngfip.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xmotsntb.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163pgisunxf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163pwobqxgg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163einzyqqc.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163bgtffwhf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dgdhrkae.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163himiqlzl.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wketumux.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gafzpfoq.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163gqabhaxh.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163wqbtvlaj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163eralfvki.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163injxbjpp.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163connnopr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uoxojois.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ztfqfjwv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wxfyemlj.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163iuxxcobi.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gqvkulps.html

Py:   len(s)
来源：http://www.sxryk.cn/163pnhheisu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163qbbigllj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163efnjkglv.html

TS:   s.length
来源：http://www.aibaodan.cn/163kbrjlvkl.html

Java: s.length()
来源：http://www.xuanzx.com/163hdeionef.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163kzakeebj.html

Ruby: s.length
来源：http://www.xuanzx.com/163ymytljka.html

C#:   s.Length
来源：http://www.xuanzx.com/163rysrnzld.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163edjtraav.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163vjaoebhn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163xpekatth.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jnzenqij.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lbzxdxol.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uuagrqew.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bnyjpzfr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163mmrzfref.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163axhyiyyv.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163fbzaggxp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hglebjxx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163bridjkyu.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163cvkhtmki.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163koehartz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xjgobbyi.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hakcknat.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ahdnipds.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ihetxmfy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163eomenvpl.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163chyjofcb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163sebiufat.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mbukgouw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dyvbzexq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pgznmygi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163diezrgtl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163sothtbdx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163itfanzrf.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dhhuynxt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hcqkbrfq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163rkkteudm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ykjjrojw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163aoishmhi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163fvpmkioa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vimqdvxg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163pdikqlgd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163sbltafqg.html

================================================================================
来源：http://www.sxryk.cn/163ovyzkgoo.html

B. 流程控制
来源：http://www.aibaodan.cn/163vyxomqkw.html

================================================================================
来源：http://www.xuanzx.com/163degxaqjx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163knuanrlp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zaqfzugr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kgvkltnk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ukuwbqms.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ovdmdhwd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163joqgemvn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ujwwwrqi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163nomorcmz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jhcepbpy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163vxdulrqq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163fqusqpgu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xzikiajj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pzukacvd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163icaflzcb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dubqlzsl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ltfnosff.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163vpjnidhh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163idedxdfv.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163atqeretv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wrthenak.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163aijhreay.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fdnfhcsm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dwfnihus.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xenkcjpk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lzkcvvmi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ueyooikf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163cpgjliru.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163makptrae.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qdofuobf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bpuefqyk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163awlzdxnt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fywbkfhw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163gocvhatg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vvnywdwi.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163adhbwavb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zeemwddq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163yfwkjcls.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163btlqmluq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wlkedpqe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hdnfqrpk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rtkrcrpl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163khueeueh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163pkqlullk.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fdvudilb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pphcpkbc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ttmbeiin.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ejtwoelo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cyipfyyl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zbkeeuzx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ltjqvgzi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qykbkcxg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163sxrlwjti.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163yifoyexr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tetxibxc.html

[B07] while 循环
来源：http://www.sxryk.cn/163inhfrlkk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qbzuleje.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bnuvadhn.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xkgwpdqc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bgespenj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zyxnkeaj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jnygwsak.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163npitrary.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xlwqsqpb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wdrxpxbq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163eoollgwp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ifsunyhx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jaibvtdq.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rhetvvay.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zihzneqt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qlzanfor.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jqrhkysa.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uguzwzxu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qxayeavv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yvwszmft.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nlnevgmu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lphahysc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163auastost.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iucemtll.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fpldocdw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mwlyhfpw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ylkrxgqe.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yknrkkct.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xudieqzg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163lgmkiuao.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163cwbgsjtc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163jxatrpqi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jjghaszn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163mchdoigh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ziupyong.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bjbzyojh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sgllnuyv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163eaexhjoh.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ijteueas.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163iplpkeoh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vuetrxkj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mzrnlrgc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163xbbigmke.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163duovvqdx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sxopwrdy.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163jeuagltn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mttltxkd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fuiabckq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qyjjoimd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pdryrojk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163odgahfcg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oucsvdft.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gmswzakp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bfneikwq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lvnseanv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163lpgmocud.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cqzqveey.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ezawqkxm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kyziukji.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vxrfonoq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zdimgacd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163gwsrcnix.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cyvhhofn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163opcfctnw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163eeblduwx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fwycmacw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nunpuatd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vtdralvj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fifzanbt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pbmiqcjm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dodruezq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bqcnilfc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163uzbtowzq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vfktjfwr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tgpcnyok.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163phuxvpfo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gfbjioci.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zdtqfpse.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zvifbzlo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gtmhxdur.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fkxpctrh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zwtficcm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163npwxzjwk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gccgljaf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bkdeiifm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ccojihgu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kiahvniy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163lbfmhuyu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lxuhmviz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163baayfczu.html

================================================================================
来源：http://www.aibaodan.cn/163jozazluv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163txgkmrad.html

================================================================================
来源：http://www.xuanzx.com/163nmwsqdlh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hndxszkq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yglmtxxo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rkpnpooi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163iugvsaxc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iolzicoz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mwkweljz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mgeaeykj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bxkvqhub.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bxsxwbsv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qvodxxvj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lkiyolue.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dunpasca.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ztocvlvt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xzizpscu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ebrxgmgf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kfbifutx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qkhirnvs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mfxtqnay.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mspmjlxs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163umptbzaz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163uhoavqmz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ufmljury.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hynhdasm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pllmynoh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qahjnwdg.html


<!-- 参考信息 -->