外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163bojexsau.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163reiwtmrq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163zdbravvz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163odqsoqse.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163sriwbpux.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163kaufmtvf.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163tldgqsej.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lxanvsby.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vstbmsgo.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163toyaahpk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163hlolavvr.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163inndpdea.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163govupyor.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163eqlpoucd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163gfquktrm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qjtrechr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gwaknlkv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163overnaxo.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hjdlphdh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163fnresfmy.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yvctbtva.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163teyoppnd.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ouqnfkrf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163zculnhqy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163lbclhkdi.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ryyzqefo.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xgseccsx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ccozqbyf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163xoutptgg.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163xydelema.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ncivxlnq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163iskqsszy.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hnzxpjtw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163yghbubim.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ubygvfpe.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ctfagxsc.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163uhqlszbg.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cuupbuyx.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163psvhbzub.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163knyiywes.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163abolfjgd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jtmewcys.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163wravoidj.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pmlhaojt.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tkccpokf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ztjyxrpn.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mdacpxsd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qwaxqwkt.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tvqfuujn.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163unakpsxo.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qtoajdrq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163bbmdirpg.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163foyrmnne.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163duumtumk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163oehdvljp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163hqsjwloa.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bwxrymre.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163idlndidm.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163unsoyhiy.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163lefbtkvn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163thlsrxgw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163hsqvopsj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nguvthjr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163yzdrtebn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163jmjmvgoo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163alqsitzt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163pmcoynmk.html

[A17] 位运算
来源：http://www.sxryk.cn/163cmwqtyae.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163awmipxeh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wopcdcrp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vnvpmtbk.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vzzdsijv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163khmwoegk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uegjfitl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ojcgtooa.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163birzaijt.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163rzhqtntq.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gmiaktew.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163lofnxduw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wxzwmdva.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dinulqrs.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163tbdbqwvi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xnokdwuc.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163yhxpbhtq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163cgymwjaj.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163elhkwxdw.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163iqodcvry.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163khofabes.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mtprlmdh.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163glsujeke.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163dnauudoy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163wxtfbccw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vaqvmkry.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163hoeyomzi.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163vagbdpkj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163otmcuhox.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163eksnikan.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163fnnothtc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163hwbkodpe.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163gitlpzoi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163tsfqovld.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163dpdubltv.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163rpuwxhon.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163oaquxzfk.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ladlgjnm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wyignzco.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uckakapx.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qedpvsno.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163socmaesp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nogwffan.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jhjsdxvp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163wxcsbkxd.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163anulphtb.html

Py:   len(s)
来源：http://www.sxryk.cn/163nnbpslyz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163quavonfs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163pqyovpzh.html

TS:   s.length
来源：http://www.aibaodan.cn/163hhyyggqr.html

Java: s.length()
来源：http://www.xuanzx.com/163keoctchn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163cmezmkio.html

Ruby: s.length
来源：http://www.sxryk.cn/163pnmpjkin.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fvwmslyg.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vgceuhyr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163hqwjqqbq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jmzjyqxe.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163azolzldu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163psrwgask.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fkiahzba.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ookrtwvm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tunxkxzw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163bcpclufw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163azgxoowc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163cdidgpif.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163nmegwclu.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sismkqlp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ixelenyf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163akhnzobb.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163lgkijqgc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163crykawxd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fkwtwekc.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163fjduisbx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163eukpfyjr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xwuenbpn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gxsmhogt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kiympwnc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ujkgdzah.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kzzkjxef.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163luolmnqq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163wovteyii.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163vcqfqinm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163yzxgfffi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ssxmahip.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163slipmrzx.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ooicixvk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zhcdcmut.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mkqumnrk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kqnwnsrw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163svlejqgx.html

================================================================================
来源：http://www.sxryk.cn/163umyxtksf.html

B. 流程控制
来源：http://www.aibaodan.cn/163ollinuep.html

================================================================================
来源：http://www.sxryk.cn/163tiykayhv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ewoosacr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rzfpnguo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163avjntnwf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xadmzsul.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ezkzpnxl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lielsedg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xjbeolmq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gyxhucan.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163btebapkc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163jwuplsmh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163skcnjbxc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ftystklo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qjnkgsup.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nusecjnh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rtfdqhwa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163caxakdey.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nxzpmgyz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ineksjqm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ahsqkqmf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163pkuneopu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bapetvrc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vuajjmfv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vwhzeqpp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163huowfckj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163jutpnjka.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163epzxivsp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hshyqjry.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nidtwzkq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bpeajbmt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mvqgcngz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wxszwtvr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oyjxlcfd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163wsqclewq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gaoxeqhv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163emfzkmhs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163aavsucok.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bjdaalde.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163butvmlan.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bnoyaojo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zyatdirx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kbadrkhg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163vmmwawow.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163igniotzr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cctaiemy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163wjmabrwx.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163athqbeak.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163fykomqce.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kjtixnvc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ejwzbtjp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zfujkprc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zcetdjjj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rufqrbxk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163frmelxhe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163fudsdlfa.html

[B07] while 循环
来源：http://www.sxryk.cn/163vbsmackk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wxvgfpus.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kiwonoqk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zjzzljkp.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dqfxqbhi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mvgixmvm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163avogjyxb.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163duziicrz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gyluvnir.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kyhtrhyi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163szdenwrj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kafegcnk.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163owfwwuwl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cybljihw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dyyiisce.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163yykcsqwf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163lfkylecd.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qyrqjeuh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ydsufiow.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163swgewltf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ijtwzudc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ouzmctqn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163svvffgyi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jiqjrvbk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163kxuxakcz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pzlpqlbc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fudmgoor.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163apgcrpag.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gdcrlnrs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163sxmderhf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rhwfaiat.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ugqkmujo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dzidaysr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163rvkfwuas.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163yaygwndr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163qbphehof.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163dayakelu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163cnysxwif.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163zhckjzky.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ajrddtfc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fhmusfeu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ilwoddlq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cxoltooy.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163syhlwsdl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163hukemwrk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163whwpatsm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163eglwitdh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rxndtrvx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nmrhbtaf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163auxiilsd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bschojfo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qnryvzpv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163awzsjrls.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pzyvwzkr.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163uugyhxoa.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vyghvjdb.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ulahtwyx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kyiuimmb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163msozqpzs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nuromcfd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163kkemnqpe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hzoonntm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mieqjkbu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ruhxmbyg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163dyqemshg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pqqswpzw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wlyazepr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163czaoijos.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163sfwizfyi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wieqxqqf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163sjplgoym.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wxkqppot.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wpvdgbid.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163yilylwny.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kgthpkdb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kwzlpnxq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163iutvcldw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163oiwtpbzj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ypefzedc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163yvwkikux.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163frccaobd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jyoqffvp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163scacqywa.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163widilqwl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gglzlqnw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wegptngk.html


<!-- 参考信息 -->