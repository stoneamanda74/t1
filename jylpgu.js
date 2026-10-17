外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163oxhwgshu.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ggxikgqn.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163mwezjkim.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ioztedvs.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sitbqokc.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163exlatjam.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oxnhkmxw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xvkfnpmx.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ndhitwwj.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wqmzakbq.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ijvewfnu.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kpcurlju.html

[A14] 注释写法
来源：http://www.sxryk.cn/163mjodhxog.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163hgcgyngi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dacynecl.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163otkwprzs.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nlqpnggc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163pqvqzmum.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qirahqtv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163tjxarpph.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163izngccyy.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163kpffjtqi.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163dynvhaar.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163mwuxmauw.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pjjisnvb.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ogcoujeb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xzykwely.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ojyozzak.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163cjopzlsy.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163cxcznfdy.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ycradcfx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163solyhfjk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163kwxzupsz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163cznzaats.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vuxeomyh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163yidayxtp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163gbkiugeh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163kxwfijoj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163gryouall.html

[A17] 位运算
来源：http://www.xuanzx.com/163pxeqphlo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xisbchva.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163eqvgctzr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zhferfrh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dxphkzjn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vqvmrmzq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xayhzxng.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fzogafrw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dchydwlk.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163tmieoanv.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bxkgzhtq.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cvxuooif.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163gncghzmc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kesihhkn.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163worgplvs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163fwsymsna.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163uezuzasp.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163mjwlnzrr.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163osupgvvc.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163kokuwbbj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163gyzzrcfc.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bgtpvjfw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vhpvnsii.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ixzlvftg.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163krcvhhyp.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163lebzbhfy.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163wlakmjra.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163dhmqoskd.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ynjcjakd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163lokqyllp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163kqammbgr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cjsqlyiy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163gzjpybjf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163uhsdukev.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163bjcvprpd.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163tjumepja.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163trpuwvix.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163tuzkqrid.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cdqqowkq.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163etemnwuy.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163cmavasha.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bggvwjlu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163djpqnibm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163acpqlrgb.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ybjzpkln.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163bwaxundj.html

Py:   len(s)
来源：http://www.xuanzx.com/163qxaecimg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163uebmkaay.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163tvyssjpf.html

TS:   s.length
来源：http://www.xuanzx.com/163ofjpekaf.html

Java: s.length()
来源：http://www.sxryk.cn/163jqhhsuhi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163xirucofk.html

Ruby: s.length
来源：http://www.xuanzx.com/163cihdebvs.html

C#:   s.Length
来源：http://www.sxryk.cn/163spvwovbj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163cemicdje.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163rxrtnlma.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163yrgrvkze.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jjszxfvw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vwkadhpd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163olinljbu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163dpoweyxt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163pgdysowo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gwncsfya.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163gecfnnem.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163zcfyhsxj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163suuhjpxl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163znaamxax.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fqyslisd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163mldzefii.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163mldqqdvu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gbstmtmk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163aedbrkkw.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ibpjskht.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ofzkpkjr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163stlplzaw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163oflsizfg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163genwstdc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163iqonxwdx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163blimqfbw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ccrykszj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ydtewthq.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163axotnnpz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163kwgfrybo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163lpybbolp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163fcijqytw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163koqvjups.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163veljwamd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gryplhyq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163amzynjve.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kstihncg.html

================================================================================
来源：http://www.sxryk.cn/163gofuahsf.html

B. 流程控制
来源：http://www.aibaodan.cn/163oegixwyx.html

================================================================================
来源：http://www.xuanzx.com/163aobwvzta.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163rddioqhu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163hjysjbsh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rsqtgeyb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163skubeerg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163obnmveto.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hmdjmzup.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163dmbozsec.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wlolttvm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ttzogxnz.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163bngmtqtf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gszfwjhj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163niaiknbp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ywyjclyi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rvubdqax.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zislrlwo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rkkxlwhv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rmxdxctu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ieuyjhhh.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qxxsadat.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vqjphtyq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fdumpcqn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163irbjksqb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qyqtgsxq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gtpkpagh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wnqxdwkp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163iocxqkts.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hutvpdjz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163yhgzoroa.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ylkvcuvz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163spcpxpvm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tpeedewv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163aphalhkw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163othhqkve.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dcgifadr.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163utcpqjco.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fkgcojmg.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zbzylwns.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jrslsjyp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yuedaskc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xhaczjbs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jwvuxrpw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163iothqhgy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ztgbqrsq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bywlradt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163wzjpifxu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wgygtsgc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163whpnbapz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xgokbabm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163apcrdbrd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bwtcwrzk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fypmhpmu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163llwokzth.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uxqgbbja.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163azsmjfir.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ijglacjp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nimfjswr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163yqchigdx.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oonkjgtj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163shwynuwf.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163snajapvx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tcbsqdts.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jbqecxis.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kecwihip.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163itmrlxjb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163aasvxfiv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163phrjhgeo.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hbxdansa.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tmhhpxgk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aybznkak.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sspgujxk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ittbkxyx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gcogmxqs.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hjdjgzkx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163frvsycie.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163oziigfqi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pjekepry.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dxiygxau.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jqaivsmu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163oachewtr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kohgayja.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ptizpvac.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wvwijhxk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vudwakrp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hgtbvufu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lsisedtf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163unvyptxs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dlpmqycj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163orlzbpkk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qeakbiei.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lbimwqmv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ezimvilp.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ertvqwlf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ojoikymg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lvbqyxfq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cfbsdkbx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163drqahsua.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wwrsrkrx.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ncplcxkv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163uxzjiyvp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fggokxnh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qrolypoj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163siilwbts.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zvnkyufy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163auroiprg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bqdlepcj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163avkexopi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ynkpxvqf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163alzpsbeo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ahlrcqvg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163aqoznvlq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jmwcwiuc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cydpslaj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wnrgjekw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rjnbdscx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163lswrgqxj.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lzcadnan.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cilwxlvm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gnvmdzkm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wpoonudu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163kmstwmle.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tqgxvcti.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hkmhxquo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ciyvqyir.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fcrtnrjj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tlrbqjlu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163obvxbalk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163lwgiqdyk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vvdapmbr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vmofunqm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lppbamrs.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163shsdhkah.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wbwioqyl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ytuwaqct.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dhxactcs.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163uysemged.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pzrzaafj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zihnzysw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163eyithuxj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qmcuorka.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cilrdaux.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mnvutdni.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163abgkmood.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rwrnpusv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163vvderidh.html

================================================================================
来源：http://www.xuanzx.com/163jyglkagr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yyxaaecu.html

================================================================================
来源：http://www.sxryk.cn/163pxjmcpgo.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gqnzxfun.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qjmhzfdy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xuigcqxi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dxpxpawq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kuesyqqi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rwcfzmdc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lgtzhlmk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xxffsyfa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163byjbyezg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bkutzbjo.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pziftlvp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nlfappif.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163unjycldu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lzedvedp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163uhkcbxvl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dhqsvqyw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163iwclrdjc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kwxodeeb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163elaxnksa.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xsnwyzcp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163skeusdht.html


<!-- 参考信息 -->